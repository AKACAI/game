System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec2, LogManager, Utils, EventManager, EventConstants, _dec, _class, _crd, ccclass, property, ComButton, ButtonEventType;

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../../utils/LogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../event_manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstants(extras) {
    _reporterNs.report("EventConstants", "../../event_manager/EventConstants", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      LogManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventConstants = _unresolved_5.EventConstants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7fb43Exy9Ij5SrcFlBtBzM", "ComButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'NodeEventType', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComButton", ComButton = (_dec = ccclass('ComButton'), _dec(_class = class ComButton extends Component {
        constructor(...args) {
          super(...args);
          this.eventDict = undefined;
          this.isInited = false;
          this.isMouseInButton = false;
          this._isPressed = false;

          /** 两次点击的缓存时间*/
          this.clickBufferTime = 250;

          /** 点击后动画缩放比例 */
          this.scaleTarget = 0.7;
          this.lastClickTime = 0;
          this.isDoAnim = false;
          this._blockClickEvent = false;
        }

        onLoad() {
          this.init(true, true);
        }

        onDestroy() {
          this.removeAllEvent();
        }

        init(isDoAnim = true, blockClickEvent = true) {
          if (this.isInited) {
            return;
          }

          this.isInited = true;
          this.isDoAnim = isDoAnim;
          this._blockClickEvent = blockClickEvent;
        }

        reset() {
          this.eventDict = {};
          this.lastClickTime = 0;
          this.isMouseInButton = false;
          this._isPressed = false;
        }

        onEnable() {
          this.reset();
          this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        }

        onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this._onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
        } //#region 点击逻辑


        _onTouchStart(event) {
          console.log("_onTouchStart: ", this.node.name);

          if (!this.enabledInHierarchy) {
            return;
          }

          this._isPressed = true;

          if (event && this._blockClickEvent) {
            event.propagationStopped = true;
          }

          if (this.isDoAnim) {
            this.node.setScale(this.scaleTarget, this.scaleTarget, this.scaleTarget);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatchEvent((_crd && EventConstants === void 0 ? (_reportPossibleCrUseOfEventConstants({
            error: Error()
          }), EventConstants) : EventConstants).InputSystem.ClickStart, this.node);
        }

        _onTouchMove(event) {
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

        _onTouchEnd(event) {
          console.log("_onTouchEnd: ", this.node.name);

          if (!this.enabledInHierarchy) {
            return;
          }

          if (this._isPressed) {
            let dis = Vec2.distance(event.getStartLocation(), event.getLocation());

            if (dis < 10) {
              //移动不超过10像素才判断为点击
              this.onClick(event);
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

        _onTouchCancel(event) {
          console.log("_onTouchCancel: ", this.node.name);

          if (!this.enabledInHierarchy) {
            return;
          }

          if (this.isDoAnim) {
            this.node.setScale(1, 1, 1);
          }

          this._isPressed = false;
        }

        onClick(event) {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("点击了按钮：", this.node.name);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getCurTimeStamp() - this.lastClickTime > this.clickBufferTime) {
            let events = this.eventDict[ButtonEventType.click];

            if (events) {
              for (let i = 0; i < events.length; i++) {
                events[i].func.apply(events[i].target, events[i].params);
              }
            }
          } else {}

          this.lastClickTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getCurTimeStamp();
        }

        addEvent(data) {
          if (!this.eventDict[data.type]) {
            this.eventDict[data.type] = [];
          }

          this.eventDict[data.type].push(data);
        }

        removeEvent(func) {
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

        removeAllEventByType(type) {
          this.eventDict[type] = [];
        }

        removeAllEvent() {
          this.eventDict = {};
        }

      }) || _class));

      _export("ButtonEventType", ButtonEventType = /*#__PURE__*/function (ButtonEventType) {
        ButtonEventType[ButtonEventType["click"] = 1] = "click";
        ButtonEventType[ButtonEventType["doubleClick"] = 2] = "doubleClick";
        return ButtonEventType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e235f3ecff67dfb7b951640dc6baf85e72eb2e8.js.map