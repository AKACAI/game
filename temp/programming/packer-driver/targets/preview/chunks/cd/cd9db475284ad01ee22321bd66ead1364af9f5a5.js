System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, LogManager, Utils, _dec, _class, _crd, ccclass, property, ComButton, ButtonEventType;

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../../utils/LogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
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
      NodeEventType = _cc.NodeEventType;
    }, function (_unresolved_2) {
      LogManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7fb43Exy9Ij5SrcFlBtBzM", "ComButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComButton", ComButton = (_dec = ccclass('ComButton'), _dec(_class = class ComButton extends Component {
        constructor() {
          super(...arguments);
          this.eventDict = undefined;
          this.isInited = false;
          this.isMouseInButton = false;
          this.isButtonDown = false;

          /** 两次点击的缓存时间*/
          this.clickBufferTime = 250;

          /** 点击后动画缩放比例 */
          this.scaleTarget = 0.7;
          this.lastClickTime = 0;
          this.isDoAnim = false;
        }

        onLoad() {
          this.init(true);
        }

        onDestroy() {
          this.removeAllEvent();
        }

        init(isDoAnim) {
          if (isDoAnim === void 0) {
            isDoAnim = true;
          }

          if (this.isInited) {
            return;
          }

          this.isInited = true;
          this.eventDict = {};
          this.lastClickTime = 0;
          this.isMouseInButton = false;
          this.isButtonDown = false;
          this.node.on(NodeEventType.MOUSE_DOWN, () => {
            this.isButtonDown = true;

            if (this.isMouseInButton) {
              this.onClickStart();
            }
          }, this);
          this.node.on(NodeEventType.MOUSE_UP, () => {
            this.isButtonDown = false;

            if (this.isMouseInButton) {
              this.onClick();
            } else {
              this.cancelClick();
            }
          }, this);
          this.node.on(NodeEventType.MOUSE_ENTER, () => {
            this.isMouseInButton = true;

            if (!this.isButtonDown) {
              this.onMouseEnter();
            }
          }, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, () => {
            this.isMouseInButton = false;

            if (!this.isButtonDown) {
              this.onMouseLeave();
            }
          }, this);
        }

        onClickStart() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("onClickStart");

          if (this.isDoAnim) {
            this.node.setScale(this.scaleTarget, this.scaleTarget, this.scaleTarget);
          }
        }

        cancelClick() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("cancelClick");

          if (this.isDoAnim) {
            this.node.setScale(1, 1, 1);
          }
        }

        onMouseEnter() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("onMouseEnter");
        }

        onMouseLeave() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("onMouseLeave");
        }

        onClick() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log("点击了按钮：", this.node.name);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).getCurTimeStamp() - this.lastClickTime > this.clickBufferTime) {
            var events = this.eventDict[ButtonEventType.click];

            if (events) {
              for (var i = 0; i < events.length; i++) {
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
          for (var _type in this.eventDict) {
            var arr = this.eventDict[_type];

            if (!arr) {
              continue;
            }

            for (var i = 0; i < arr.length; i++) {
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
//# sourceMappingURL=cd9db475284ad01ee22321bd66ead1364af9f5a5.js.map