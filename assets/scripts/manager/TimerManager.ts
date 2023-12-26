import PriorityQueue from "../utils/PriorityQueue";
import Utils from "../utils/Utils";

// 加载任务
interface TimerTask {
   _id: number;
   _triggerTime: number; //每次触发间隔时间(ms)
   _delayTime: number; //第一次触发的延迟时间(ms)
   _nextTriggerTime: number; //下次触发的时间戳(ms)
   _loop: boolean; //是否循环
   _param: any; //附带数据
   _isDestroy: boolean;     //定时器是否被销毁
   _callback: any; //回调函数
   _target: any; //回调函数所在的对象
}

export default class TimerManager {
    private static _timerList: PriorityQueue<TimerTask>;

    private static _insertList: Array<TimerTask>;
    //private static _curTimeStamp : number;  // 当前的时间戳

    private static readonly _dealInsertCount = 10;  // 一帧里面最多可以插入多少个定时器

    private static _curID: number = 0;
    private static get _getID(): number {
        return this._curID++;
    }

    public static init() {
        TimerManager._timerList = new PriorityQueue<TimerTask>((a: TimerTask, b: TimerTask) : number => {
            if (a._nextTriggerTime > b._nextTriggerTime) {
                return 1;
            }
            else if (a._nextTriggerTime == b._nextTriggerTime) {
                return 0;
            }
            else {
                return -1;
            }
        });
        TimerManager._insertList = new Array<TimerTask>();
        console.log("TimerManager初始化完成!");
    }

    public static update() {
        // 遍历插入列表，最多_dealInsertCount个地插入到优先级队列里面
        let count = Math.min(this._insertList.length, TimerManager._dealInsertCount);
        for (let i = 0; i < count; i++) {
            let insertTimer = this._insertList.shift();
            
            // TODO 可能是这个push的问题？
            this._timerList.push(insertTimer);
        }

        TimerManager.execute();
    }

    private static execute() {
        let topTimer = this._timerList.top();
        if (topTimer && topTimer._nextTriggerTime <= Utils.getCurTimeStamp()) {
            // console.log(this._timerList);
            topTimer = this._timerList.pop();
            if (topTimer._isDestroy) {
                TimerManager.execute();
                return;
            }
            if (topTimer._loop) {
                topTimer._nextTriggerTime = Utils.getCurTimeStamp() + topTimer._triggerTime;
                TimerManager._insertList.push(topTimer);
            }
            topTimer._callback(topTimer._param, topTimer._target);
            TimerManager.execute();
            return;
        }
    }

    /**
     * 添加一个定时器
     * @param delayTime 第一次延迟多久触发（ms），如果是0则立即触发
     * @param isLoop 是否循环
     * @param triggerTime 每次触发的时间间隔（ms）
     * @param callback 回调
     * @param param 参数
     * @param target 回调的对象
     * @returns 
     */
    public static addTimer(delayTime: number = 0, isLoop: boolean, triggerTime: number, callback: any, param?: any, 
         target: any = this): number {
        if (triggerTime <=0 || delayTime < 0) {
            console.log("定时器的触发时间不能为负数！！！！！！");
            return -1;
        }
        let id = TimerManager._getID;
        let timer: TimerTask = {
            _id: id,
            _callback: callback,
            _loop: isLoop,
            _param: param,
            _triggerTime: triggerTime,
            _delayTime: delayTime,
            _target: target,
            _nextTriggerTime: Utils.getCurTimeStamp() + delayTime,
            _isDestroy: false,
        }
        TimerManager._insertList.push(timer);
        return id;
    }

    /**
     * 通过id删除一个定时器
     * @param id 目标id
     * @returns 是否成功删除
     */
    public static removeTimer(id: number): boolean {
        // 如果该定时器在插入列表中，就直接移除并返回就好了
        let targetIndex = this._insertList.findIndex((timer) => {
            return timer._id == id;
        });
        if (targetIndex >= 0) {
            this._insertList.splice(targetIndex);
            return true;
        }

        // 找到在优先级队列里的目标，直接把摧毁标志置为true，当定时器遇到它的时候直接跳过它即可
        let timer = this._timerList.find((a: TimerTask): boolean => {
            return a._id == id;
        });
        if (timer) {
            timer._isDestroy = true;
            return true;
        }
        return false;
    }

    // TODO 通过回调删除一个定时器

    public static print() {
        TimerManager._timerList.print((a: TimerTask): string => {
            return a._id.toString();
        });
    }
}