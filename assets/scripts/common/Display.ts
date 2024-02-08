import { _decorator, Component, math, Node, Vec2, view } from 'cc';
import { Singleton } from './Singleton';
import LogManager from '../utils/LogManager';
const { ccclass, property } = _decorator;

@ccclass('Display')
export class Display extends Singleton {
    private windowSize: math.Size = undefined;

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.windowSize = view.getVisibleSize();
    }

    public getWindowSize(): math.Size {
        LogManager.log(this.windowSize);
        return this.windowSize;
    }
}


