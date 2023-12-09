import { _decorator, Component, Node } from 'cc';
import { UILayer } from './UIManager';
const { ccclass, property } = _decorator;

@ccclass('UIPanel')
export class UIPanel extends Component {
    protected _layer: UILayer = UILayer.alert;
    protected _resDestroyType: ResDestroyType = ResDestroyType.delayRelease;

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

    public dispose() {

    }

    public get layer() {
        return this._layer;
    }
    public get resDestroyType() {
        return this._resDestroyType;
    }
}

export enum ResDestroyType {
    directlyRelease,
    delayRelease,
    neverRelease
}