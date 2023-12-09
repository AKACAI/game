import { Label, Node, _decorator } from "cc";
import { MScrollItem } from "../../../common/m_scroll_view/MScrollItem";

const { ccclass, property } = _decorator;

@ccclass('GameToolsItem')
export class GameToolsItem extends MScrollItem {
    private lb_num: Node;

    public init() {
        this.lb_num = this.node.getChildByName("lb_num");
    }

    public setData(data: { num: number }) {
        this.itemData = data;
        this.lb_num.getComponent(Label).string = this.itemData.num;
    }
}


