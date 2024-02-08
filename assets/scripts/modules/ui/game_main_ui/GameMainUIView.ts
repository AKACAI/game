import { _decorator, Node } from "cc";
import { UIPanel } from "../../../manager/ui_manager/UIPanel";
import { UILayer } from "../../../manager/ui_manager/UIManager";
import { GameManager, GameState } from "../../../manager/game_manager/GameManager";
import LogManager from "../../../utils/LogManager";

const { ccclass, property } = _decorator;

@ccclass('GameMainUIView')
export class GameMainUIView extends UIPanel {
    private node_right_top: Node = undefined;
    private node_menu_btns: Node = undefined;
    private btn_hide: Node = undefined;
    private btn_pause: Node = undefined;
    private btn_tip: Node = undefined;

    public init() {
        super.init();
        this._layer = UILayer.normal;

        this.node_right_top = this.node.getChildByName("node_right_top");
        this.node_menu_btns = this.node_right_top.getChildByName("node_menu_btns");
        this.btn_hide = this.node_menu_btns.getChildByName("btn_hide");
        this.btn_pause = this.node_menu_btns.getChildByName("btn_pause");
        this.btn_tip = this.node_menu_btns.getChildByName("btn_tip");
    }

    public open() {
        super.open();
        this.initMenuBtns();
    }

    public close() {
        super.close();
    }

    public dispose() {
        super.dispose();
    }

    private initMenuBtns() {
        for (let i = 0; i < this.node_menu_btns.children.length; i++) {

        }
    }
}