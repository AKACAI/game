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
        constructor(...args) {
          super(...args);
          this.eventDict = undefined;
          this.isInited = false;
          this.isMouseInButton = false;
          this.clickBufferTime = 250;
          // 两次点击的缓存时间
          this.lastClickTime = 0;
        }

        onLoad() {
          this.init();
        }

        onDestroy() {
          this.removeAllEvent();
        }

        init() {
          if (this.isInited) {
            return;
          }

          this.isInited = true;
          this.eventDict = {};
          this.lastClickTime = 0;
          this.isMouseInButton = false;
          this.node.on(NodeEventType.MOUSE_DOWN, () => {}, this);
          this.node.on(NodeEventType.MOUSE_UP, () => {
            this.onClick();
          }, this);
          this.node.on(NodeEventType.MOUSE_ENTER, () => {
            this.isMouseInButton = true;
          }, this);
          this.node.on(NodeEventType.MOUSE_LEAVE, () => {
            this.isMouseInButton = false;
          }, this);
        }

        onClick() {
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
//# sourceMappingURL=7361d9c8894db84aa0152f1d62a858718e33ac0f.js.map