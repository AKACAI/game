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
        start() {}

        update(deltaTime) {}

      }) || _class));

      _export("ButtonEventType", ButtonEventType = /*#__PURE__*/function (ButtonEventType) {
        ButtonEventType[ButtonEventType["click"] = 1] = "click";
        return ButtonEventType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78745aefe7a603e1f3ca9aadde36d765d3f13597.js.map