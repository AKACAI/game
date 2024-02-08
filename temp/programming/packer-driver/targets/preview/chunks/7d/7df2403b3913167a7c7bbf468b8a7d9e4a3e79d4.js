System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UIPanel, UILayer, GameManager, GameState, LogManager, _dec, _class, _crd, ccclass, property, GameMainUIView;

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

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../../utils/LogManager", _context.meta, extras);
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
      UILayer = _unresolved_3.UILayer;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      LogManager = _unresolved_5.default;
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
          this.node_right = undefined;
          this.node_btns = undefined;
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
          this.btn_start = this.node_btns.getChildByName("btn_start");
          this.btn_setting = this.node_btns.getChildByName("btn_setting");
          this.btn_exit = this.node_btns.getChildByName("btn_exit");
          this.btn_start.on(Node.EventType.MOUSE_UP, () => {
            (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
              error: Error()
            }), LogManager) : LogManager).log("点击了开始");

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
          });
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7df2403b3913167a7c7bbf468b8a7d9e4a3e79d4.js.map