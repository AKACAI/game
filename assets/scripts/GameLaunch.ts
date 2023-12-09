import { _decorator, Component } from "cc";
import { GameApp } from "./GameApp";
import { ResManager } from "./manager/ResManager";
import TimerManager from "./manager/TimerManager";

const { ccclass, property } = _decorator;

@ccclass('GameLaunch')
export class GameLaunch extends Component {
    protected onLoad(): void {
        TimerManager.init();
        ResManager.getInstance().init();
        // NetManager.init();

        this.addComponent(GameApp).gameLaunch();
    }

    protected update(): void {
        TimerManager.update();
    }
}


