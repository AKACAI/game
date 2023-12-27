import { _decorator, Node } from "cc";
import { UIPanel } from "../../../manager/ui_manager/UIPanel";
import { UILayer } from "../../../manager/ui_manager/UIManager";
import { GameManager, GameState } from "../../../manager/game_manager/GameManager";
import LogManager from "../../../utils/LogManager";

const { ccclass, property } = _decorator;

@ccclass('GameStartMenuView')
export class GameStartMenuView extends UIPanel {
    private node_right: Node = undefined;
    private node_btns: Node = undefined;
    private btn_start: Node = undefined;
    private btn_setting: Node = undefined;
    private btn_exit: Node = undefined;

    public init() {
        super.init();
        this._layer = UILayer.menu;

        this.node_right = this.node.getChildByName("node_right");
        this.node_btns = this.node_right.getChildByName("node_btns");
        this.btn_start = this.node_btns.getChildByName("btn_start");
        this.btn_setting = this.node_btns.getChildByName("btn_setting");
        this.btn_exit = this.node_btns.getChildByName("btn_exit");

        this.btn_start.on(Node.EventType.MOUSE_UP, () => {
            LogManager.log("点击了开始");
            if (GameManager.getInstance().gameState == GameState.NotInGame) {
                GameManager.getInstance().start();
                this.closeBySelf();
            }
        });
    }

    public open() {
        super.open();
    }

    public close() {
        super.close();
    }

    public dispose() {
        super.dispose();
    }
}