
import { _decorator, Component, Node } from 'cc';
import { UILayer } from '../../../manager/ui_manager/UIManager';
import { UIPanel } from '../../../manager/ui_manager/UIPanel';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends UIPanel {
    public init() {
        this._layer = UILayer.menu;
    }

    public open() {

    }

    public close() {

    }

    public dispose() {

    }
}


