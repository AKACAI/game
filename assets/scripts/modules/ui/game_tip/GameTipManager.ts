import { _decorator, Vec2 } from "cc";
import { Singleton } from "../../../common/Singleton";
import { PanelName } from "../../../manager/ui_manager/Name2Panel";
import { UIManager } from "../../../manager/ui_manager/UIManager";
import { GameTipData } from "./GameTipItem";
import { GameTipView } from "./GameTipView";
import { IPreInit } from "../../../common/IPreInit";

const { ccclass, property } = _decorator;

@ccclass('GameTipManager')
export class GameTipManager extends Singleton implements IPreInit {
    private gameTipView: GameTipView;

    public init() {
        UIManager.getInstance().openPanel(PanelName.GameTip, () => {
            this.gameTipView = UIManager.getInstance().getPanel(PanelName.GameTip) as GameTipView;
            this.hideTip();
        });
        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    public showTip(name: string, data: GameTipData[]) {
        if (!this.gameTipView) {
            return;
        }
        this.gameTipView.showTip(name, data);
    }

    public moveTip(pos: Vec2) {
        if (!this.gameTipView) {
            return;
        }
        this.gameTipView.node.setWorldPosition(pos.x, pos.y, 0);
    }

    public hideTip() {
        if (!this.gameTipView) {
            return;
        }
        this.gameTipView.hideTips();
    }
}


