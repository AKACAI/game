import { _decorator, director, Vec2, Node, PhysicsSystem2D, game, Game } from "cc";
import { Singleton } from "../../common/Singleton";
import { ObjectBase, ObjectVisualTag } from "../../modules/game/ObjectBase";
import { GameTipManager } from "../../modules/ui/game_tip/GameTipManager";
import { InputManager, MouseParam } from "../InputManager";
import { MapManager } from "../map_manager/MapManager";
import { IPreInit } from "../../common/IPreInit";
import { InteractManager } from "./InteractManager";
const { ccclass } = _decorator;

let timeScale = 1;
//@ts-ignore
game._calculateDT = function (now: number) {
    if (!now) now = performance.now();
    this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0;
    if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
        this._deltaTime = this.frameTime / 1000;
    }
    this._startTime = now;
    return this._deltaTime * timeScale;
};

export enum GameState {
    NotInGame,
    Pause,
    Ongoing,
}


@ccclass('GameManager')
export class GameManager extends Singleton {
    private _gameState: GameState;
    private _interacterManager: InteractManager;

    // 应该引入一个ObjectManager的东西
    private _gameRoot: Node;
    // private _gameObjects: ObjectBase[][];   // 物体的输入有优先级的区分，0级为最优先，依次递减
    private _gameObjects: { [tag: number]: ObjectBase[] };

    public init() {
        this._gameState = GameState.NotInGame;
        this._interacterManager = new InteractManager(this);
        this._gameRoot = director.getScene().getChildByName("main_canvas").getChildByName("game_root");
        this._gameObjects = {};
        for (let tag in ObjectVisualTag) {
            this._gameObjects[tag] = [];
        }

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
        timeScale = 1;
        PhysicsSystem2D.instance.enable = true;
        MapManager.getInstance().enterMap("100001");
    }

    public setTimeScale(value) {
        timeScale = value < 0 ? 0 : value > 2 ? 2 : value;
    }

    public pause() {
        if (this._gameState != GameState.Ongoing) {
            return;
        }
        for (const tag in this._gameObjects) {
            for (let i = 0; i < this._gameObjects[tag].length; i++) {
                const object = this._gameObjects[tag][i];
                if (!object) {
                    continue;
                }
                object.pause();
            }
        }
        this._gameState = GameState.Pause;
    }

    public resume() {
        if (this._gameState != GameState.Pause) {
            return;
        }
        for (const tag in this._gameObjects) {
            for (let i = 0; i < this._gameObjects[tag].length; i++) {
                const object = this._gameObjects[tag][i];
                if (!object) {
                    continue;
                }
                object.resume();
            }
        }
        this._gameState = GameState.Ongoing;
    }

    public update(deltaTime: number) {
        let mouseParam = InputManager.getInstance().getMouseData();

        for (const tag in this._gameObjects) {
            const objectInTag = this._gameObjects[tag];
            for (let i = 0; i < objectInTag.length; i++) {
                const object = objectInTag[i];

                this._interacterManager.interactWithObject(object, mouseParam);
                object.applyForce();
            }
        }
        // if (showTipObject) {
        //     let objectInfo = showTipObject.getObjectInfo();
        //     GameTipManager.getInstance().showTip(objectInfo.id, objectInfo.name, objectInfo.tipData);
        //     GameTipManager.getInstance().moveTip(mouseParam.mousePos);
        // } else {
        //     GameTipManager.getInstance().hideTip();
        // }
    }

    public addObject(object: ObjectBase, visualTag: ObjectVisualTag) {
        this._gameObjects[visualTag].push(object);
    }

    public removeObject(object: ObjectBase) {
        //this._gameObjects.
    }
}