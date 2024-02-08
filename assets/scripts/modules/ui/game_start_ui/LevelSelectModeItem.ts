import { _decorator, Color, Component, instantiate, Node, Prefab, Sprite, UIOpacity } from "cc";
import NodeHelper from "../../../common/NodeHelper";
import Utils from "../../../utils/Utils";

const { ccclass, property } = _decorator;

@ccclass('LevelSelectModeItem')
export class LevelSelectModeItem extends Component {
    private img_mode: Node = undefined;
    private lb_mode_name: Node = undefined;
    private img_state_mask: Node = undefined;

    private data: ISetDataModeItem = undefined;
    private readonly maxOpacity: number = 100;

    public init() {
        this.img_mode = this.node.getChildByName("img_mode");
        this.lb_mode_name = this.node.getChildByName("lb_mode_name");
        this.img_state_mask = this.node.getChildByName("img_state_mask");
        this.img_state_mask.active = true;
        this.setProgressOpacity(0);
        this.addListener();
    }

    private addListener() {
        NodeHelper.setNodeClickEvent(this.node, () => {
            if (this.data && this.data.clickCb) {
                this.data.clickCb();
            }
        }, this, undefined, false);
    }

    public setData(data: ISetDataModeItem) {
        this.data = data;
        NodeHelper.setLabelString(this.lb_mode_name, data.name);
    }

    public setProgressOpacity(progress: number) {
        let opacity = Utils.clamp(progress * this.maxOpacity, 0, this.maxOpacity);
        this.changeMaskOpacity(opacity);
    }

    private changeMaskOpacity(opacity: number) {
        let opacityCpt: Sprite = this.img_state_mask.getComponent(Sprite);
        if (opacityCpt) {
            let color: Color = opacityCpt.color;
            color.a = Utils.clamp(opacity, 0, 255);
            opacityCpt.color = color;
        }
    }

    public dispose() {

    }
}

export interface ISetDataModeItem {
    name: string,
    bg_path: string,
    clickCb: Function,
}