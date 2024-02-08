import { _decorator, Component, EventTouch, Node, NodeEventType, Vec2 } from 'cc';
import LogManager from '../../../utils/LogManager';
import Utils from '../../../utils/Utils';
import EventManager from '../../event_manager/EventManager';
import { EventConstants } from '../../event_manager/EventConstants';
const { ccclass, property } = _decorator;

@ccclass('ComButton')
export class ComButton extends Component {
    private eventDict: { [type: number]: ButtonEventArgs[] } = undefined;

    private isInited: boolean = false;

    public onDestroy(): void {
        if (this.isInited) {
            this.removeAllEvent();
        }
    }

    private _isPressed: boolean = false;
    /** 两次点击的缓存时间*/
    private readonly clickBufferTime = 250;
    /** 点击后动画缩放比例 */
    private readonly scaleTarget = 0.9;
    private lastClickTime: number = 0;

    private isDoAnim: boolean = false;
    private _blockClickEvent: boolean = false;

    public init(isDoAnim: boolean = true, blockClickEvent: boolean = true) {
        if (this.isInited) {
            return;
        }
        this.isInited = true;
        this.isDoAnim = isDoAnim;
        this._blockClickEvent = blockClickEvent;
        this.eventDict = {};
        this.reset();
    }

    private reset() {
        this.lastClickTime = 0;
        this._isPressed = false;
    }

    onEnable() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this)
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this)
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this)
        this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this)
    }

    onDisable() {
        this.reset();
        this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this)
        this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this)
        this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this)
        this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this)
    }

    //#region 点击逻辑

    private _onTouchStart(event: EventTouch) {
        console.log("_onTouchStart: ", this.node.name);
        if (!this.enabledInHierarchy) {
            return
        }

        this._isPressed = true;
        if (event && this._blockClickEvent) {
            event.propagationStopped = true;
        }
        if (this.isDoAnim) {
            this.node.setScale(this.scaleTarget, this.scaleTarget, this.scaleTarget);
        }
        EventManager.dispatchEvent(EventConstants.InputSystem.ClickStart, this.node);
    }

    private _onTouchMove(event: EventTouch) {
        console.log("_onTouchMove: ", this.node.name);
        if (!!this.enabledInHierarchy || !this._isPressed) {
            return;
        }
        if (!event) {
            return false;
        }
        if (event && this._blockClickEvent) {
            event.propagationStopped = true;
        }
    }

    private _onTouchEnd(event: EventTouch) {
        console.log("_onTouchEnd: ", this.node.name);
        if (!this.enabledInHierarchy) {
            return
        }

        if (this._isPressed) {
            let dis = Vec2.distance(event.getStartLocation(), event.getLocation())
            if (dis < 10) {  //移动不超过10像素才判断为点击
                this.onClick(event)
            }
        }

        if (this.isDoAnim) {
            this.node.setScale(1, 1, 1);
        }
        this._isPressed = false;
        if (event && this._blockClickEvent) {
            event.propagationStopped = true;
        }
    }

    private _onTouchCancel(event: EventTouch) {
        console.log("_onTouchCancel: ", this.node.name);
        if (!this.enabledInHierarchy) {
            return;
        }
        if (this.isDoAnim) {
            this.node.setScale(1, 1, 1);
        }
        this._isPressed = false;
    }

    private onClick(event: EventTouch) {
        LogManager.log("点击了按钮：", this.node.name);
        if (Utils.getCurTimeStamp() - this.lastClickTime > this.clickBufferTime) {
            let events: ButtonEventArgs[] = this.eventDict[ButtonEventType.click];
            if (events) {
                for (let i = 0; i < events.length; i++) {
                    events[i].func.apply(events[i].target, events[i].params);
                }
            }
        } else {

        }
        this.lastClickTime = Utils.getCurTimeStamp();
    }

    public addEvent(data: ButtonEventArgs) {
        if (!this.eventDict[data.type]) {
            this.eventDict[data.type] = [];
        }
        this.eventDict[data.type].push(data);
    }

    public removeEvent(func: Function) {
        for (let type in this.eventDict) {
            let arr = this.eventDict[type];
            if (!arr) {
                continue;
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].func == func) {
                    arr.splice(i, 1);
                }
            }
        }
    }

    public removeAllEventByType(type: ButtonEventType) {
        this.eventDict[type] = [];
    }

    public removeAllEvent() {
        this.eventDict = {};
    }
}

export enum ButtonEventType {
    click = 1,
    doubleClick = 2,
}

export interface ButtonEventArgs {
    type: ButtonEventType,
    func: Function,
    target: any,
    params: any,
}