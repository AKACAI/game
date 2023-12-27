import { _decorator, Component, Node } from 'cc';
import { UILayer, UIManager } from './UIManager';
const { ccclass, property } = _decorator;

@ccclass('UIPanel')
export class UIPanel extends Component {
    protected _layer: UILayer = UILayer.alert;
    protected _resDestroyType: ResDestroyType = ResDestroyType.delayRelease;
    protected _panelName: string = "";

    public init() {

    }

    public bindFunc() {

    }

    public disbindFunc() {
        //EventManager.getInstance().removeListener();
    }

    public open() {
        this.node.active = true;
    }


    public close() {
        this.node.active = false;
    }

    protected closeBySelf() {
        UIManager.getInstance().closePanel(this._panelName);
    }

    public dispose() {

    }

    public get layer() {
        return this._layer;
    }
    public get resDestroyType() {
        return this._resDestroyType;
    }

    public get panelName() {
        return this._panelName;
    }
    public set panelName(value: string) {
        this._panelName = value;
    }
}

export enum ResDestroyType {
    directlyRelease,
    delayRelease,
    neverRelease
}