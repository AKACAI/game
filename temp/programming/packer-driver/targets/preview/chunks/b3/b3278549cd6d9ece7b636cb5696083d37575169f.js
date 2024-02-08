System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PriorityQueue, Utils, TimerManager, _crd;

  function _reportPossibleCrUseOfPriorityQueue(extras) {
    _reporterNs.report("PriorityQueue", "../utils/PriorityQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../utils/Utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PriorityQueue = _unresolved_2.default;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5913eeEWphERoeUngXIk+I0", "TimerManager", undefined);

      // 加载任务
      _export("default", TimerManager = class TimerManager {
        static get _getID() {
          return this._curID++;
        }

        static init() {
          TimerManager._timerList = new (_crd && PriorityQueue === void 0 ? (_reportPossibleCrUseOfPriorityQueue({
            error: Error()
          }), PriorityQueue) : PriorityQueue)((a, b) => {
            if (a._nextTriggerTime > b._nextTriggerTime) {
              return 1;
            } else if (a._nextTriggerTime == b._nextTriggerTime) {
              return 0;
            } else {
              return -1;
            }
          });
          TimerManager._insertList = new Array();
          console.log("TimerManager初始化完成!");
        }

        static update() {
          // 遍历插入列表，最多_dealInsertCount个地插入到优先级队列里面
          var count = Math.min(this._insertList.length, TimerManager._dealInsertCount);

          for (var i = 0; i < count; i++) {
            var insertTimer = this._insertList.shift(); // TODO 可能是这个push的问题？


            this._timerList.push(insertTimer);
          }

          TimerManager.execute();
        }

        static execute() {
          var topTimer = this._timerList.top();

          if (topTimer && topTimer._nextTriggerTime <= (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getCurTimeStamp()) {
            // console.log(this._timerList);
            topTimer = this._timerList.pop();

            if (topTimer._isDestroy) {
              TimerManager.execute();
              return;
            }

            if (topTimer._loop) {
              topTimer._nextTriggerTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).getCurTimeStamp() + topTimer._triggerTime;

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


        static addTimer(delayTime, isLoop, triggerTime, callback, param, target) {
          if (delayTime === void 0) {
            delayTime = 0;
          }

          if (target === void 0) {
            target = this;
          }

          if (triggerTime <= 0 || delayTime < 0) {
            console.log("定时器的触发时间不能为负数！！！！！！");
            return -1;
          }

          var id = TimerManager._getID;
          var timer = {
            _id: id,
            _callback: callback,
            _loop: isLoop,
            _param: param,
            _triggerTime: triggerTime,
            _delayTime: delayTime,
            _target: target,
            _nextTriggerTime: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).getCurTimeStamp() + delayTime,
            _isDestroy: false
          };

          TimerManager._insertList.push(timer);

          return id;
        }
        /**
         * 通过id删除一个定时器
         * @param id 目标id
         * @returns 是否成功删除
         */


        static removeTimer(id) {
          // 如果该定时器在插入列表中，就直接移除并返回就好了
          var targetIndex = this._insertList.findIndex(timer => {
            return timer._id == id;
          });

          if (targetIndex >= 0) {
            this._insertList.splice(targetIndex);

            return true;
          } // 找到在优先级队列里的目标，直接把摧毁标志置为true，当定时器遇到它的时候直接跳过它即可


          var timer = this._timerList.find(a => {
            return a._id == id;
          });

          if (timer) {
            timer._isDestroy = true;
            return true;
          }

          return false;
        } // TODO 通过回调删除一个定时器


        static print() {
          TimerManager._timerList.print(a => {
            return a._id.toString();
          });
        }

      });

      //private static _curTimeStamp : number;  // 当前的时间戳
      TimerManager._dealInsertCount = 10;
      // 一帧里面最多可以插入多少个定时器
      TimerManager._curID = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3278549cd6d9ece7b636cb5696083d37575169f.js.map