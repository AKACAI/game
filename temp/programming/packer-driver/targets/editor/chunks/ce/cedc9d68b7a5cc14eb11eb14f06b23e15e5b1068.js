System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UILayer, _dec, _class, _crd, ccclass, property, UIPanel, ResDestroyType;

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "./UIManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UILayer = _unresolved_2.UILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66348h9mFNJWIRV0D/TtxxW", "UIPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPanel", UIPanel = (_dec = ccclass('UIPanel'), _dec(_class = class UIPanel extends Component {
        constructor(...args) {
          super(...args);
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).alert;
          this._resDestroyType = ResDestroyType.delayRelease;
        }

        init() {}

        bindFunc() {}

        disbindFunc() {//EventManager.getInstance().removeListener();
        }

        open() {
          this.node.active = true;
        }

        close() {
          this.node.active = false;
        }

        dispose() {}

        get layer() {
          return this._layer;
        }

        get resDestroyType() {
          return this._resDestroyType;
        }

      }) || _class));

      _export("ResDestroyType", ResDestroyType = /*#__PURE__*/function (ResDestroyType) {
        ResDestroyType[ResDestroyType["directlyRelease"] = 0] = "directlyRelease";
        ResDestroyType[ResDestroyType["delayRelease"] = 1] = "delayRelease";
        ResDestroyType[ResDestroyType["neverRelease"] = 2] = "neverRelease";
        return ResDestroyType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cedc9d68b7a5cc14eb11eb14f06b23e15e5b1068.js.map