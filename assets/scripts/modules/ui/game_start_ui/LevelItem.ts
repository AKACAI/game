import { _decorator, Color, Component, instantiate, Node, Prefab, Sprite, UIOpacity } from "cc";
import NodeHelper from "../../../common/NodeHelper";
import Utils from "../../../utils/Utils";
import { MapManager } from "../../../manager/map_manager/MapManager";

const { ccclass, property } = _decorator;

@ccclass('LevelItem')
export class LevelItem extends Component {
    private bg_item: Node = undefined;
    private img_lock: Node = undefined;
    private lb_level: Node = undefined;

    private data: ISetDataLevelItem = undefined;

    public init() {
        this.bg_item = this.node.getChildByName("bg_item");
        this.img_lock = this.node.getChildByName("img_lock");
        this.lb_level = this.node.getChildByName("lb_level");
        this.addListener();
    }

    private addListener() {
        NodeHelper.setNodeClickEvent(this.bg_item, () => {
            if (this.data && !this.data.isLock) {
                MapManager.getInstance().enterMap(this.data.mapPath);
            }
        }, this, undefined, false);
    }

    public setData(data: ISetDataLevelItem) {
        if (!data) {
            return;
        }
        this.data = data;
        if (data.isLock) {
            this.img_lock.active = true;
            this.lb_level.active = false;
        } else {
            this.img_lock.active = false;
            this.lb_level.active = true;
            NodeHelper.setLabelString(this.lb_level, data.level);
        }
    }

    public dispose() {

    }
}

export interface ISetDataLevelItem {
    level: number,
    mapPath: string,
    isLock: boolean,
}