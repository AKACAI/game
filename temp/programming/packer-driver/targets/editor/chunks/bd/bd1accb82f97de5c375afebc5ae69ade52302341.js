System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c31cMHQiNGkbuxV9BPhIgn", "EventManager", undefined);

      _export("default", EventManager = class EventManager {
        // 添加事件监听
        static addEvent(eventName, listener, target) {
          if (listener == null) {
            return;
          }

          let listenerArr = EventManager._eventDict[eventName];

          if (listenerArr == null) {
            listenerArr = [];
            EventManager._eventDict[eventName] = listenerArr;
          }

          for (let i = 0; i < listenerArr.length; i++) {
            if (listenerArr[i].listener === listener && listenerArr[i].target === target) {
              return;
            }
          } //todo,优化为对象池


          let event_obj = {};
          event_obj.eventName = eventName;
          event_obj.listener = listener;
          event_obj.target = target;
          listenerArr.push(event_obj);
        } // 移除事件监听


        static removeEvent(eventName, listener, target) {
          let listenerArr = EventManager._eventDict[eventName];

          if (listenerArr == null) {
            return;
          }

          if (!target) {
            //这段代码最终删掉
            for (var i = 0; i < listenerArr.length; i++) {
              if (listenerArr[i].listener == listener) {
                listenerArr.splice(i, 1); // console.log("删除=",eventName,listenerArr)

                break;
              }
            }
          } else {
            for (var i = 0; i < listenerArr.length; i++) {
              if (listenerArr[i].listener === listener && listenerArr[i].target === target) {
                listenerArr.splice(i, 1); // console.log("删除=", eventName, listenerArr)

                break;
              }
            }
          }
        } // 抛出对应事件


        static dispatchEvent(eventName, data) {
          let listenerArr = EventManager._eventDict[eventName];

          if (listenerArr == null) {
            return;
          }

          let event_obj = null;

          for (var i = 0; i < listenerArr.length; i++) {
            event_obj = listenerArr[i];

            if (event_obj.target != null) {
              event_obj.listener.apply(event_obj.target, [data]); // event_obj.listener(event_obj.target, data)
            } else {
              event_obj.listener(data);
            }
          }
        } // 移除一个eventName下所有监听的事件


        static removeAllEvent(eventName) {
          EventManager._eventDict[eventName] = null;
        } // 是否存在某个事件


        static hasEvent(eventName, listener) {
          let listenerArr = EventManager._eventDict[eventName];

          if (listenerArr == null) {
            return false;
          }

          for (var i = 0; i < listenerArr.length; i++) {
            if (listenerArr[i] == listener) {
              return true;
            }
          }

          return false;
        }

        static dispose() {
          EventManager._eventDict = null;
          EventManager._eventDict = {};
        }

      });

      EventManager._eventDict = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd1accb82f97de5c375afebc5ae69ade52302341.js.map