
import { _decorator, Node, Vec2 } from 'cc';
import { Singleton } from '../common/Singleton';
import { UIManager, UILayer } from './ui_manager/UIManager';
import { IPreInit } from '../common/IPreInit';
const { ccclass, property } = _decorator;

@ccclass('InputManager')
export class InputManager extends Singleton implements IPreInit {
    private _layerMouseInput: Node;
    private _mousePos: Vec2;

    public init() {
        this._layerMouseInput = UIManager.getInstance().getLayerNode(UILayer.mouse_input);

        this._mousePos = new Vec2();
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

    private initFunc() {
        // TODO 这样的检测很不准确
        this._layerMouseInput.on(Node.EventType.MOUSE_MOVE, (mouseEvent) => {
            // console.log(mouseEvent.getUILocation())
            this._mousePos = mouseEvent.getUILocation();
            // console.log(this._mousePos)
        })
    }
}


