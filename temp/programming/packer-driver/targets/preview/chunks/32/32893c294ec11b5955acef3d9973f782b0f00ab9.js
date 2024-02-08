System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ComButton, ButtonEventType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7fb43Exy9Ij5SrcFlBtBzM", "ComButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComButton", ComButton = (_dec = ccclass('ComButton'), _dec(_class = class ComButton extends Component {
        constructor() {
          super(...arguments);
          this.eventDict = undefined;
        }

        initButton() {
          this.eventDict = {};
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
              if (arr[i].func == func) {}
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
//# sourceMappingURL=32893c294ec11b5955acef3d9973f782b0f00ab9.js.map