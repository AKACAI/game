import { _decorator, Component, Node, Prefab } from 'cc';
import { UILayer, UIManager } from './UIManager';
import { LoadType, ResManager } from '../ResManager';
const { ccclass, property } = _decorator;

@ccclass('UIPanel')
export class UIPanel extends Component {
    protected _layer: UILayer = UILayer.alert_no_bg;
    protected _resDestroyType: ResDestroyType = ResDestroyType.delayRelease;
    public panelName: string = "";
    public bundleName: string = "";

    //protected preloadResDict: { [type: number]: string[] }; //type是LoadType

    public init() {

    }

    public open() {
        this.node.active = true;
    }


    public close() {
        this.node.active = false;
    }

    protected closeBySelf() {
        UIManager.getInstance().closePanel(this.panelName);
    }

    public dispose() {

    }

    public get layer() {
        return this._layer;
    }
    public get resDestroyType() {
        return this._resDestroyType;
    }

    // /**在init之前调用，增加 */
    // protected addLoadPrefab(path: string, bundleName?: string) {
    //     this.preloadResDict[LoadType.PrefableRes].push();
    //     if (bundleName) {
    //         ResManager.getInstance().loadAsset(path, LoadType.PrefableRes, bundleName, (prefab: Prefab) => {
    //             this.modeItemPrefab = prefab;
    //         });
    //     }
    // }
}

export enum ResDestroyType {
    directlyRelease,
    delayRelease,
    neverRelease
}