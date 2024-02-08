import { _decorator, Node } from "cc";
import { UIPanel } from "../../../manager/ui_manager/UIPanel";
import { UILayer, UIManager } from "../../../manager/ui_manager/UIManager";
import { GameManager, GameState } from "../../../manager/game_manager/GameManager";
import LogManager from "../../../utils/LogManager";
import NodeHelper from "../../../common/NodeHelper";
import { PanelName } from "../../../manager/ui_manager/Name2Panel";

const { ccclass, property } = _decorator;

@ccclass('GameStartMenuView')
export class GameStartMenuView extends UIPanel {
    private node_right: Node = undefined;
    private node_btns: Node = undefined;
    private btn_continue: Node = undefined;
    private btn_start: Node = undefined;
    private btn_setting: Node = undefined;
    private btn_exit: Node = undefined;

    public init() {
        super.init();
        this._layer = UILayer.normal;

        this.node_right = this.node.getChildByName("node_right");
        this.node_btns = this.node_right.getChildByName("node_btns");
        this.btn_continue = this.node_btns.getChildByName("btn_continue");
        this.btn_start = this.node_btns.getChildByName("btn_start");
        this.btn_setting = this.node_btns.getChildByName("btn_setting");
        this.btn_exit = this.node_btns.getChildByName("btn_exit");

        NodeHelper.setNodeClickEvent(this.btn_continue, () => {
            if (GameManager.getInstance().gameState == GameState.NotInGame) {
                GameManager.getInstance().start();
                this.closeBySelf();
            }
        }, this);

        NodeHelper.setNodeClickEvent(this.btn_start, () => {
            if (GameManager.getInstance().gameState == GameState.NotInGame) {
                UIManager.getInstance().openPanel(PanelName.LevelSelectView);
            }
        }, this);

        NodeHelper.setNodeClickEvent(this.btn_setting, () => {

        }, this);

        NodeHelper.setNodeClickEvent(this.btn_exit, () => {

        }, this);
    }

    public open() {
        super.open();
        this.updateUI();
    }

    private updateUI() {
        let showContinueBtn: boolean = true;
        let curPosY = 35;
        if (showContinueBtn) {
            this.btn_continue.active = true;
            NodeHelper.setPosY(this.btn_continue, curPosY);
            curPosY -= 70;
        } else {
            this.btn_continue.active = false;
        }
        this.btn_start.active = true;
        NodeHelper.setPosY(this.btn_start, curPosY);
        curPosY -= 70;
        this.btn_setting.active = true;
        NodeHelper.setPosY(this.btn_setting, curPosY);
        curPosY -= 70;
        this.btn_exit.active = true;
        NodeHelper.setPosY(this.btn_exit, curPosY);
        curPosY -= 70;
    }

    public close() {
        super.close();
    }

    public dispose() {
        super.dispose();
    }
}