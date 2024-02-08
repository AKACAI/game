import { _decorator, instantiate, Node, Prefab, tween, UIOpacity, Vec2, Vec3 } from "cc";
import { UIPanel } from "../../../manager/ui_manager/UIPanel";
import { UILayer } from "../../../manager/ui_manager/UIManager";
import { GameManager, GameState } from "../../../manager/game_manager/GameManager";
import LogManager from "../../../utils/LogManager";
import NodeHelper from "../../../common/NodeHelper";
import { LoadType, ResManager } from "../../../manager/ResManager";
import { ISetDataModeItem, LevelSelectModeItem } from "./LevelSelectModeItem";
import { Display } from "../../../common/Display";
import { LevelItem } from "./LevelItem";
import MapData, { IMapConfig } from "../../../manager/map_manager/MapData";

const { ccclass, property } = _decorator;

@ccclass('LevelSelectView')
export class LevelSelectView extends UIPanel {
    private node_center: Node = undefined;
    private node_mode_items: Node = undefined;

    private btn_close: Node = undefined;
    private btn_tip: Node = undefined;
    private node_block_click_mask: Node = undefined;

    private node_level_items: Node = undefined;

    private modeItems: LevelSelectModeItem[] = undefined;
    private levelItems: LevelItem[] = undefined;

    private status: LevelSelectViewStatus = undefined;
    private readonly modeItemPath: string = "level_select_mode_item";
    private readonly levelItemPath: string = "level_item";
    private modeItemPrefab: Prefab = undefined;
    private levelItemPrefab: Prefab = undefined;
    private readonly tweenShowAnimData = {
        animTime: 0.7,
    }

    private modeData: IMapConfig[] = undefined;
    public init() {
        super.init();
        this._layer = UILayer.normal;


        ResManager.getInstance().loadAsset(this.levelItemPath, LoadType.PrefableRes, this.bundleName, (prefab: Prefab) => {
            this.levelItemPrefab = prefab;
        });

        this.node_center = this.node.getChildByName("node_center");
        this.node_mode_items = this.node_center.getChildByName("node_mode_items");
        this.btn_close = this.node_center.getChildByName("btn_close");
        this.btn_tip = this.node_center.getChildByName("btn_tip");
        this.node_block_click_mask = this.node_center.getChildByName("node_block_click_mask");
        this.node_level_items = this.node_center.getChildByName("node_level_items");
        NodeHelper.setNodeSizeFullScreen(this.node_block_click_mask);
        this.addListener();
    }

    public open() {
        super.open();

        this.status = LevelSelectViewStatus.origin;
        this.initItemUI();
        this.node_block_click_mask.active = false;
    }

    private addListener() {
        NodeHelper.setNodeClickEvent(this.btn_close, () => {
            this.closeBySelf();
        }, this);

        NodeHelper.setNodeClickEvent(this.btn_tip, () => {

        }, this);
    }

    private initItemUI() {
        this.modeItems = [];
        this.modeData = [];
        let modeDict = MapData.getInstance().getModeDatas();
        for (let key in modeDict) {
            const modeItem = modeDict[key];
            this.modeData.push(modeItem);
        }
        let modeData: ISetDataModeItem[] = [];
        for (let index = 0; index < this.modeData.length; index++) {
            const modeItem = this.modeData[index];
            modeData.push({
                name: modeItem.modeName,
                bg_path: modeItem.modeBg,
                clickCb: () => {
                    this.showOneMode(index);
                    this.showModeLevel(modeItem.modeId);
                }
            })
        }

        if (!this.node_mode_items || !this.modeItems) {
            LogManager.error(this.panelName, "已经正在销毁了！！");
            return;
        }
        let onLoadFinish = () => {
            let screenWidth: number = Display.getInstance().getWindowSize().x;
            let spacingWithSceenX: number = 200;
            let spacingX: number = (screenWidth - spacingWithSceenX * 2) / (modeData.length - 1);
            let startPosX: number = -(screenWidth - spacingWithSceenX * 2) / 2;
            for (let i = 0; i < modeData.length; i++) {
                let node = instantiate(this.modeItemPrefab);
                this.node_mode_items.addChild(node);
                NodeHelper.setPosX(node, startPosX + spacingX * i);
                let itemCpt: LevelSelectModeItem = node.getComponent(LevelSelectModeItem);
                if (itemCpt) {
                    itemCpt.init();
                    itemCpt.setData(modeData[i]);
                }
                this.modeItems.push(itemCpt);
            }
        }
        ResManager.getInstance().loadAsset(this.modeItemPath, LoadType.PrefableRes, this.bundleName, (prefab: Prefab) => {
            this.modeItemPrefab = prefab;
            onLoadFinish();
        });
    }

    private showOneMode(index: number) {
        if (index >= this.modeItems.length) {
            return;
        }
        if (this.status != LevelSelectViewStatus.origin) {
            return;
        }
        this.status = LevelSelectViewStatus.showAnim;
        this.node_block_click_mask.active = true;
        let order: number = 1;      // 用来标记当前是第几个小模式
        for (let i = 0; i < this.modeItems.length; i++) {
            const item = this.modeItems[i];
            if (i == index) {
                item.node.setSiblingIndex(this.modeItems.length - 1);
                tween(item.node)
                    .to(this.tweenShowAnimData.animTime, { position: new Vec3(-300, -40), scale: new Vec3(1.2, 1.2, 1) })
                    .call(() => {
                        this.status = LevelSelectViewStatus.idle;
                        this.node_block_click_mask.active = false;
                    })
                    .start();
            } else {
                item.node.setSiblingIndex(this.modeItems.length - 1 - order);
                tween(item.node)
                    .to(this.tweenShowAnimData.animTime * 0.8, { position: new Vec3(-320 - 30 * order, -60), scale: new Vec3(1, 1, 1) }, {})
                    .call(() => {

                    })
                    .start();
                order++;
            }
        }
    }

    private showModeLevel(mode: number) {
        const modeData: IMapConfig = MapData.getInstance().getModeDatasById(mode);
        for (let i = 0; i < this.levelItems.length; i++) {
            let item = this.levelItems[i];
            if (item) {
                this.givebackLevelItem(item);
            }
        }
        this.node_level_items.removeAllChildren();
        const layoutData = {
            startPos: new Vec2(-180, 100),
            horizonCount: 5,
            verticleCount: 4,
            spacingX: 100,
            spacingY: 100,
        }
        let showCount = Math.min(modeData.levelDatas.length, layoutData.horizonCount * layoutData.verticleCount);
        for (let i = 0; i < showCount; i++) {
            const dataItem = modeData.levelDatas[i];
            const cptItem = this.getLevelItem();
            cptItem.setData({
                level: dataItem.levelId,
                mapPath: dataItem.levelPath,
                isLock: dataItem.isLock == 1,
            });
            let pos = new Vec3(layoutData.startPos.x + i % layoutData.horizonCount * layoutData.spacingX,
                layoutData.startPos.y + Math.floor(i / layoutData.horizonCount) * layoutData.spacingY);
            cptItem.node.setPosition(pos);
        }
    }

    //#region 关卡item的对象池
    private levelItemPool: LevelItem[] = undefined;

    private getLevelItem(): LevelItem {
        if (!this.levelItemPool) {
            this.levelItemPool = [];
        }
        let item = this.levelItemPool.pop();
        if (item) {
            return item;
        }
        let node = instantiate(this.levelItemPrefab);
        let cpt = node.getComponent(LevelItem);
        if (cpt) {
            return cpt;
        } else {
            node.destroy();
            return undefined;
        }
    }

    private givebackLevelItem(item: LevelItem) {
        if (!item) {
            return;
        }
        if (!this.levelItemPool) {
            this.levelItemPool = [];
        }
        item.node.active = false;
        this.levelItemPool.push(item);
    }

    private destroyLevelItemPool() {
        if (this.levelItemPool) {
            for (let i = 0; i < this.levelItemPool.length; i++) {
                this.levelItemPool[i]?.dispose();
            }
        }
    }

    //#endregion
    public close() {
        super.close();
    }

    public dispose() {
        super.dispose();
        if (this.modeItems) {
            for (let i = 0; i < this.modeItems.length; i++) {
                this.modeItems[i]?.dispose();
            }
        }
        if (this.levelItems) {
            for (let i = 0; i < this.levelItems.length; i++) {
                this.levelItems[i]?.dispose();
            }
        }
        this.destroyLevelItemPool();
        ResManager.getInstance().releaseAsset(this.modeItemPrefab);
        ResManager.getInstance().releaseAsset(this.levelItemPrefab);
    }
}

enum LevelSelectViewStatus {
    origin = 1,     // 初始状态
    showAnim = 2,   // 聚拢动画中
    idle = 3,       // 聚拢后静态
    rotateAnim = 4, // 旋转动画中
}