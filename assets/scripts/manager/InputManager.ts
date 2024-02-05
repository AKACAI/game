
import { _decorator, Node, Vec2 } from 'cc';
import { Singleton } from '../common/Singleton';
import { UIManager, UILayer } from './ui_manager/UIManager';
import { IPreInit } from '../common/IPreInit';
const { ccclass, property } = _decorator;

@ccclass('InputManager')
export class InputManager extends Singleton implements IPreInit {
    private _layerMouseInput: Node;
    private _mousePos: Vec2;
    private _isLeftBtnPressed: boolean;

    public init() {
        this._layerMouseInput = UIManager.getInstance().getLayerNode(UILayer.mouse_input);

        this._mousePos = new Vec2();
        this._isLeftBtnPressed = false;
        this.initFunc();
        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    public get mousePos(): Vec2 {
        return this._mousePos;
    }

    public getMouseData(): MouseParam {
        let mouseParam: MouseParam = {
            mousePos: this._mousePos,
            isLeftBtnPressed: this._isLeftBtnPressed,
        }
        return mouseParam;
    }

    private initFunc() {
        this._layerMouseInput.on(Node.EventType.MOUSE_MOVE, (mouseEvent) => {
            this._mousePos = mouseEvent.getUILocation();
        });

        this._layerMouseInput.on(Node.EventType.MOUSE_DOWN, () => {
            this._isLeftBtnPressed = true;
        });

        this._layerMouseInput.on(Node.EventType.MOUSE_UP, () => {
            this._isLeftBtnPressed = false;
        });
    }
}

export interface MouseParam {
    mousePos: Vec2,
    isLeftBtnPressed: boolean,
}