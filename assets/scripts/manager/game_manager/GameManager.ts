import { _decorator, director, Vec2, Node, PhysicsSystem2D } from "cc";
import { Singleton } from "../../common/Singleton";
import { ObjectBase } from "../../modules/game/ObjectBase";
import { GameTipManager } from "../../modules/ui/game_tip/GameTipManager";
import { InputManager } from "../InputManager";
import { MapManager } from "../map_manager/MapManager";
import { IPreInit } from "../../common/IPreInit";
const { ccclass } = _decorator;

export enum GameState {
    NotInGame,
    Pause,
    Ongoing,
}


@ccclass('GameManager')
export class GameManager extends Singleton {
    private _gameState: GameState;

    // 应该引入一个ObjectManager的东西
    private _gameRoot: Node;
    // private _gameObjects: ObjectBase[][];   // 物体的输入有优先级的区分，0级为最优先，依次递减
    private _gameObjects: ObjectBase[];
    private _curDetectObject: ObjectBase;       // 当前鼠标检测到的物体

    public init() {
        this._gameState = GameState.Ongoing;
        this._gameRoot = director.getScene().getChildByName("main_canvas").getChildByName("game_root");
        this._gameObjects = [];

        console.log("GameManager初始化完成!");
        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    public get gameState() {
        return this._gameState;
    }

    public get gameRoot() {
        return this._gameRoot;
    }

    public start() {
        this._gameState = GameState.Ongoing;
        PhysicsSystem2D.instance.enable = true;
        MapManager.getInstance().enterMap("100001");
    }

    public pause() {
        if (this._gameState != GameState.Ongoing) {
            return;
        }
        for (let i = 0; i < this._gameObjects.length; i++) {
            const object = this._gameObjects[i];
            if (!object) {
                continue;
            }
            object.pause();
        }
        this._gameState = GameState.Pause;
    }

    public resume() {
        if (this._gameState != GameState.Pause) {
            return;
        }
        for (let i = 0; i < this._gameObjects.length; i++) {
            const object = this._gameObjects[i];
            if (!object) {
                continue;
            }
            object.resume();
        }
        this._gameState = GameState.Ongoing;
    }

    public update(deltaTime: number) {
        let curMousePos = InputManager.getInstance().mousePos;
        let param: MouseParam = {
            mousePos: curMousePos,
        }
        // 应该改成鼠标坐标变化时调用，而不是每一帧都调用
        let hasShowTip = false;
        for (let i = 0; i < this._gameObjects.length; i++) {
            let object = this._gameObjects[i];
            // console.log(object.contains(curMousePos))
            if (object.contains(curMousePos)) {
                if (object != this._curDetectObject) {
                    this._curDetectObject = object;
                    GameTipManager.getInstance().showTip(object.getObjectParam().name, object.getTipData());
                    GameTipManager.getInstance().moveTip(curMousePos);
                    object.mouseOnObject(true, param);
                }
                else {
                    GameTipManager.getInstance().moveTip(curMousePos);
                }
                hasShowTip = true;
                break;
            }
        }
        // 在不需要显示提示并且上一帧有检测到物体（说明现在没检测到
        if (!hasShowTip && this._curDetectObject) {
            GameTipManager.getInstance().hideTip();
            this._curDetectObject = null;
        }
    }

    public addObject(object: ObjectBase) {
        this._gameObjects.push(object);
    }

    public removeObject(object: ObjectBase) {
        //this._gameObjects.
    }
}

export interface MouseParam {
    mousePos: Vec2,

}

