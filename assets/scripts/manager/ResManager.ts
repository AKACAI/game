import { AssetManager, assetManager, error, Prefab, SpriteFrame, SpriteAtlas, sp, TTFFont, ParticleAsset, Font, JsonAsset, Material, Texture2D, TextureCube, AnimationClip, Mesh, Asset } from "cc";
import { Singleton } from "../common/Singleton";
import { IPreInit } from "../common/IPreInit";

export class ResManager extends Singleton implements IPreInit {
    // TODO 缓存管理
    private name2Bundle: Map<string, AssetManager.Bundle> = undefined;

    public init() {
        this.name2Bundle = new Map;
        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    loadBundle(bundleName: string, successCb?: (bundle?) => void, target?) {
        if (this.name2Bundle.has(bundleName)) {
            let bundle = this.name2Bundle[bundleName];
            if (successCb) {
                successCb.apply(target, [bundle, target]);
            }
            return;
        }

        LoadHelper.loadBundle(bundleName, (bundle) => {
            if (bundle) {
                this.name2Bundle[bundleName] = bundle;
                if (successCb) {
                    console.log("成功加载bundle包：", bundleName);
                    successCb.apply(target, [bundle, target]);
                }
            }
        }, (err) => {
            console.log("加载bundle失败，bundle名为：", bundleName);
        }, this);
    }

    releaseBundle(bundleName: string) {
        this.name2Bundle.delete(bundleName);
        LoadHelper.releaseBundle(bundleName);
    }

    /**资源加载*/
    loadAsset(path: string, type: LoadType, bundleName: string, successCb?: (asset: any) => void, failCb?: (err?: Error | string) => void, target?) {
        // if (!this.name2Bundle.has(bundleName)) {
        //     console.error(`bundle包未加载,加载的资源路径为：${path},bandle包为:${bundleName}`);
        //     return;
        // }

        let loadTask: LoadTaskParam = {
            resPath: path,
            resType: type,
            bundleName: bundleName,
            failCb: failCb,
            successCb: successCb,
            target: target,
        };
        LoadHelper.loadAsset(loadTask);
    }

    releaseAssetByPath(path: string, bundleName: string) {
        LoadHelper.releaseAssetByPath(path, bundleName);
    }

    releaseAsset(asset: Asset) {
        LoadHelper.releaseAsset(asset);
    }
}

class LoadHelper {
    private static assetsDict: { [bundleName: string]: { [resPath: string]: Asset } } = {};

    static loadBundle(bundleName: string, successCb?: (bundle) => void, failCb?: (err) => void, target?) {
        assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
                if (failCb) {
                    failCb.apply(target, [err, target])
                }
            }
            else {
                if (successCb) {
                    successCb.apply(target, [bundle, target])
                }
            }
        });
    }

    static releaseBundle(bundleName: string) {
        let bundle = assetManager.getBundle(bundleName);
        bundle.releaseAll();
        assetManager.removeBundle(bundle);
    }

    static loadAsset(params: LoadTaskParam) {
        if (params.resPath == null || params.resPath == "") {
            error("load path is empty");
            return;
        }
        // 直接介入
        let resType: any
        switch (params.resType) {
            case LoadType.PrefableRes: resType = Prefab; break;
            case LoadType.NormalImg: resType = SpriteFrame; break;
            case LoadType.PLIST: resType = SpriteAtlas; break;
            case LoadType.SPINE: resType = sp.SkeletonData; break;
            case LoadType.TTFONT: resType = TTFFont; break;
            case LoadType.PARTICLE: resType = ParticleAsset; break;
            case LoadType.FONT: resType = Font; break;
            case LoadType.JSON: resType = JsonAsset; break;
            case LoadType.Material: resType = Material; break;
            case LoadType.Texture: resType = Texture2D; break;
            case LoadType.TextureCube: resType = TextureCube; break;
            case LoadType.AnimationClip: resType = AnimationClip; break;
            case LoadType.MESH: resType = Mesh; break;
        }
        if (!resType) {
            console.error("未知的加载类型", resType)
            return
        }

        assetManager.loadAny({ path: params.resPath, type: resType, bundle: params.bundleName }, { priority: params.level },
            (err: any, asset: Asset) => {
                if (err) {
                    if (params.failCb) {
                        params.failCb.apply(params.target, [err, params.target])
                    }
                }
                else {
                    console.log("成功加载asset：", params.resPath);
                    if (params.successCb) {
                        params.successCb.apply(params.target, [asset, params.target])
                        if (!this.assetsDict[params.bundleName]) {
                            this.assetsDict[params.bundleName] = {};
                        }
                        this.assetsDict[params.bundleName][params.resPath] = asset;
                    }
                }
            }
        );
    }

    static releaseAssetByPath(path: string, bundleName: string) {
        if (!this.assetsDict[bundleName]) {
            return;
        }
        let asset = this.assetsDict[bundleName][path];
        assetManager.releaseAsset(asset);
    }

    static releaseAsset(asset: Asset) {
        if (asset) {
            assetManager.releaseAsset(asset);
        }
    }
}


/**自定义类型到资源类型的转换 */
export const CustomType2assetTypeDic: { [type: number]: any } = {
    1: Prefab,
    2: SpriteFrame,
    3: SpriteAtlas,
    4: sp.SkeletonData,
    5: TTFFont,
    6: ParticleAsset,
    7: Font,
    8: JsonAsset,
    9: Material,
    10: Texture2D,
    11: TextureCube,
    12: AnimationClip,
    13: Mesh
}

/**加载资源类型 */
export enum LoadType {
    PrefableRes = 1,
    NormalImg = 2,
    PLIST = 3,
    SPINE = 4,
    TTFONT = 5,
    PARTICLE = 6,
    FONT = 7,
    JSON = 8,
    Material = 9,
    Texture = 10,
    TextureCube = 11,
    AnimationClip = 12,
    MESH = 13,
}

interface LoadTaskParam {
    /** 要加载的资源类型 */
    resType: LoadType,
    /** 资源路径 */
    resPath: string
    /** bundle名 */
    bundleName: string
    /** 实例 */
    target?: any
    /** 优先级 数值越大越优先 */
    level?: number

    /** 加载成功回调 */
    successCb?: (asset: any) => void
    /** 加载失败回调 */
    failCb?: (err?: Error | string) => void
    /** 加载完成回调 */
    finishCb?: (err?: Error | string, asset?: any) => void
}
