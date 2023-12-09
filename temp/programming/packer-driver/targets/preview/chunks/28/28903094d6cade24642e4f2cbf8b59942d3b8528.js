System.register(["__unresolved_0", "cc", "game_manager/GameManager", "ui_manager/UIManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameManager, UIManager, _dec, _class, _crd, ccclass, property, GameApp;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "ui_manager/UIManager", _context.meta, extras);
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
    }, function (_game_managerGameManager) {
      GameManager = _game_managerGameManager.GameManager;
    }, function (_ui_managerUIManager) {
      UIManager = _ui_managerUIManager.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c68e0IdJRP/JMGUm1lRfhl", "GameApp", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameApp", GameApp = (_dec = ccclass('GameApp'), _dec(_class = class GameApp extends Component {
        gameLaunch() {
          this.isOngoing = false;
          this.preloadAssets();
        }

        preloadAssets() {
          //ResManager.getInstance().loadBundle("preload_res", () => {
          this.startGameLoop(); //}, this);
        }

        startGameLoop() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().init();
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().init();
          this.isOngoing = true;
        }

        update(deltaTime) {
          if (!this.isOngoing) {
            return;
          }

          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().update(deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28903094d6cade24642e4f2cbf8b59942d3b8528.js.map