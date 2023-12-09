System.register(["__unresolved_0", "cc", "ui_manager/UIManager", "ui_manager/UIPanel"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UILayer, UIPanel, _dec, _class, _crd, ccclass, property, MainMenu;

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "ui_manager/UIPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_ui_managerUIManager) {
      UILayer = _ui_managerUIManager.UILayer;
    }, function (_ui_managerUIPanel) {
      UIPanel = _ui_managerUIPanel.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49404Aej0FNPbJT0W+RSMUy", "MainMenu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenu", MainMenu = (_dec = ccclass('MainMenu'), _dec(_class = class MainMenu extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        init() {
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).menu;
        }

        open() {}

        close() {}

        dispose() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc3b138dfec4926e8a7f1ce513a87fb6890b1449.js.map