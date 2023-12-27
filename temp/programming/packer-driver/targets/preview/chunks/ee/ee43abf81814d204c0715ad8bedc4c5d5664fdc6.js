System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UIPanel, GameManager, _dec, _class, _crd, ccclass, property, GameStartMenuView;

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../../manager/game_manager/GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UIPanel = _unresolved_2.UIPanel;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90390qpthVFoaareJMhChrk", "GameStartMenuView", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStartMenuView", GameStartMenuView = (_dec = ccclass('GameStartMenuView'), _dec(_class = class GameStartMenuView extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);
          this.node_right = undefined;
          this.node_btns = undefined;
          this.btn_start = undefined;
          this.btn_setting = undefined;
          this.btn_exit = undefined;
        }

        init() {
          this.node_right = this.node.getChildByName("node_right");
          this.node_btns = this.node_right.getChildByName("node_right");
          this.btn_start = this.node_btns.getChildByName("btn_start");
          this.btn_setting = this.node_btns.getChildByName("btn_setting");
          this.btn_exit = this.node_btns.getChildByName("btn_exit");
          this.btn_start.on(Node.EventType.MOUSE_UP, () => {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().start();
          });
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
//# sourceMappingURL=ee43abf81814d204c0715ad8bedc4c5d5664fdc6.js.map