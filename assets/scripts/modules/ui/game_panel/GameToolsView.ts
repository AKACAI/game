import { _decorator } from "cc";
import { MScrollView } from "../../../common/m_scroll_view/MScrollView";
const { ccclass, property } = _decorator;

@ccclass('GameToolsView')
export class GameToolsView extends MScrollView {
    public setData(itemsData: { num: number }[]): void {
        super.setData(itemsData, false);
    }
}


