import { _decorator, Component } from "cc";
import { GameManager, GameState } from "./manager/game_manager/GameManager";
import { UIManager } from "./manager/ui_manager/UIManager";
import { InputManager } from "./manager/InputManager";
import { MapManager } from "./manager/map_manager/MapManager";
import { ObjectFactory } from "./modules/game/ObjectFactory";
import { GameTipManager } from "./modules/ui/game_tip/GameTipManager";
import { ResManager } from "./manager/ResManager";
import EventManager from "./manager/event_manager/EventManager";
import { EventConstants } from "./manager/event_manager/EventConstants";
import { PanelName } from "./manager/ui_manager/Name2Panel";

const { ccclass, property } = _decorator;

@ccclass('GameApp')
export class GameApp extends Component {
    private isOngoing: boolean;

    private _resMgr: ResManager;
    private _inputMgr: InputManager;
    private _uiMgr: UIManager;
    private _objectFactory: ObjectFactory;
    private _gameTipMgr: GameTipManager;
    private _mapMgr: MapManager;
    private _gameMgr: GameManager;

    private readonly isTest: boolean = false;

    public gameLaunch(): void {
        this.isOngoing = false;
        EventManager.addEvent(EventConstants.GameControl.GameStart, this.onInitFinish, this);

        this._resMgr = ResManager.getInstance();
        this._uiMgr = UIManager.getInstance();
        this._inputMgr = InputManager.getInstance();
        this._gameMgr = GameManager.getInstance();
        this._objectFactory = ObjectFactory.getInstance();
        this._gameTipMgr = GameTipManager.getInstance();
        this._mapMgr = MapManager.getInstance();

        this._resMgr.setNextInitManager(this._uiMgr);
        this._uiMgr.setNextInitManager(this._inputMgr);
        this._inputMgr.setNextInitManager(this._gameMgr);
        this._gameMgr.setNextInitManager(this._objectFactory);
        this._objectFactory.setNextInitManager(this._gameTipMgr);   // 这些可以在gameManager之后
        this._gameTipMgr.setNextInitManager(this._mapMgr);          // 这些可以在gameManager之后
        this._mapMgr.setNextInitManager(undefined);

        this._resMgr.init();
    }

    private onInitFinish() {
        this.isOngoing = true;
        if (this.isTest) {
            GameManager.getInstance().start();
        } else {
            this._uiMgr.openPanel(PanelName.GameStartMenuView);
        }
        //this._gameMgr.start();
    }

    public update(deltaTime: number): void {
        if (!this.isOngoing) {
            return;
        }
        GameManager.getInstance().update(deltaTime);
    }l
}


