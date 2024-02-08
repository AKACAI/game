System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIPanel, UILayer, GameManager, GameState, NodeHelper, _dec, _class, _crd, ccclass, property, GameStartMenuView;

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../manager/ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../../manager/game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../manager/game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeHelper(extras) {
    _reporterNs.report("NodeHelper", "../../../common/NodeHelper", _context.meta, extras);
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
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      NodeHelper = _unresolved_5.default;
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
        constructor(...args) {
          super(...args);
          this.node_right = undefined;
          this.node_btns = undefined;
          this.btn_continue = undefined;
          this.btn_start = undefined;
          this.btn_setting = undefined;
          this.btn_exit = undefined;
        }

        init() {
          super.init();
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).menu;
          this.node_right = this.node.getChildByName("node_right");
          this.node_btns = this.node_right.getChildByName("node_btns");
          this.btn_continue = this.node_btns.getChildByName("btn_continue");
          this.btn_start = this.node_btns.getChildByName("btn_start");
          this.btn_setting = this.node_btns.getChildByName("btn_setting");
          this.btn_exit = this.node_btns.getChildByName("btn_exit");
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_continue, () => {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NotInGame) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().start();
              this.closeBySelf();
            }
          }, this);
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_start, () => {
            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NotInGame) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().start();
              this.closeBySelf();
            }
          }, this);
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_setting, () => {}, this);
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_exit, () => {}, this);
        }

        open() {
          super.open();
          this.updateUI();
        }

        updateUI() {
          let showContinueBtn = true;
          let curPosY = 35;

          if (showContinueBtn) {
            this.btn_continue.active = true;
            (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
              error: Error()
            }), NodeHelper) : NodeHelper).setPosY(this.btn_continue, curPosY);
            curPosY -= 70;
          } else {
            this.btn_continue.active = false;
          }

          this.btn_start.active = true;
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setPosY(this.btn_start, curPosY);
          curPosY -= 70;
          this.btn_setting.active = true;
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setPosY(this.btn_setting, curPosY);
          curPosY -= 70;
          this.btn_exit.active = true;
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setPosY(this.btn_exit, curPosY);
          curPosY -= 70;
        }

        close() {
          super.close();
        }

        dispose() {
          super.dispose();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fff3aa2244b51ad9014cc3b6b17aafaf3052445.js.map