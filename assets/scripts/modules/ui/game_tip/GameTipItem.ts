import { _decorator, Component, Label, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameTipItem')
export class GameTipItem extends Component {
    private data: GameTipData;
    private lb_desc: Label;

    public init() {
        this.lb_desc = this.node.getChildByName("lb_desc").getComponent(Label);
    }

    public setData(data: GameTipData): void {
        if (!data) {
            return;
        }
        this.data = data;
        this.lb_desc.string = "△" + this.data.tipContent;
        this.lb_desc.updateRenderData(true);
        let node_width = this.node.getComponent(UITransform).contentSize.x;
        let lb_height = this.lb_desc.getComponent(UITransform).contentSize.y;
        this.node.getComponent(UITransform).setContentSize(node_width, lb_height);
    }
}

export interface GameTipData {
    tipContent: string,
}
