System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIPanel, UILayer, _dec, _class, _crd, ccclass, property, GameMainUIView;

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../manager/ui_manager/UIManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIPanel = _unresolved_2.UIPanel;
    }, function (_unresolved_3) {
      UILayer = _unresolved_3.UILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4daaci6m6lBFIslp4536EhF", "GameMainUIView", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameMainUIView", GameMainUIView = (_dec = ccclass('GameMainUIView'), _dec(_class = class GameMainUIView extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);
          this.node_right_top = undefined;
          this.node_menu_btns = undefined;
        }

        init() {
          super.init();
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).menu;
          this.node_right_top = this.node.getChildByName("node_right_top");
          this.node_menu_btns = this.node_right_top.getChildByName("node_menu_btns");
        }

        open() {
          super.open();
        }

        close() {
          super.close();
        }

        dispose() {
          super.dispose();
        }

        initMenuBtns() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39f4350fd3268000d80edd85ab55803ca3e58715.js.map