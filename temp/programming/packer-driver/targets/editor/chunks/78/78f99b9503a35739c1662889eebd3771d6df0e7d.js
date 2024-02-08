System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameManager, UIManager, InputManager, MapManager, ObjectFactory, GameTipManager, ResManager, EventManager, EventConstants, PanelName, _dec, _class, _crd, ccclass, property, GameApp;

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./manager/game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./manager/ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputManager(extras) {
    _reporterNs.report("InputManager", "./manager/InputManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./manager/map_manager/MapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectFactory(extras) {
    _reporterNs.report("ObjectFactory", "./modules/game/ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipManager(extras) {
    _reporterNs.report("GameTipManager", "./modules/ui/game_tip/GameTipManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "./manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./manager/event_manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstants(extras) {
    _reporterNs.report("EventConstants", "./manager/event_manager/EventConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelName(extras) {
    _reporterNs.report("PanelName", "./manager/ui_manager/Name2Panel", _context.meta, extras);
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
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      InputManager = _unresolved_4.InputManager;
    }, function (_unresolved_5) {
      MapManager = _unresolved_5.MapManager;
    }, function (_unresolved_6) {
      ObjectFactory = _unresolved_6.ObjectFactory;
    }, function (_unresolved_7) {
      GameTipManager = _unresolved_7.GameTipManager;
    }, function (_unresolved_8) {
      ResManager = _unresolved_8.ResManager;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.default;
    }, function (_unresolved_10) {
      EventConstants = _unresolved_10.EventConstants;
    }, function (_unresolved_11) {
      PanelName = _unresolved_11.PanelName;
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
        constructor(...args) {
          super(...args);
          this.isTest = false;
        }

        gameLaunch() {
          this.isOngoing = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).addEvent((_crd && EventConstants === void 0 ? (_reportPossibleCrUseOfEventConstants({
            error: Error()
          }), EventConstants) : EventConstants).GameControl.GameStart, this.onInitFinish, this);
          this._resMgr = (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance();
          this._uiMgr = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance();
          this._inputMgr = (_crd && InputManager === void 0 ? (_reportPossibleCrUseOfInputManager({
            error: Error()
          }), InputManager) : InputManager).getInstance();
          this._gameMgr = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance();
          this._objectFactory = (_crd && ObjectFactory === void 0 ? (_reportPossibleCrUseOfObjectFactory({
            error: Error()
          }), ObjectFactory) : ObjectFactory).getInstance();
          this._gameTipMgr = (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
            error: Error()
          }), GameTipManager) : GameTipManager).getInstance();
          this._mapMgr = (_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
            error: Error()
          }), MapManager) : MapManager).getInstance();

          this._resMgr.setNextInitManager(this._uiMgr);

          this._uiMgr.setNextInitManager(this._inputMgr);

          this._inputMgr.setNextInitManager(this._gameMgr);

          this._gameMgr.setNextInitManager(this._objectFactory);

          this._objectFactory.setNextInitManager(this._gameTipMgr); // 这些可以在gameManager之后


          this._gameTipMgr.setNextInitManager(this._mapMgr); // 这些可以在gameManager之后


          this._mapMgr.setNextInitManager(undefined);

          this._resMgr.init();
        }

        onInitFinish() {
          this.isOngoing = true;
          this.isTest = false;

          if (this.isTest) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().start();
          } else {
            this._uiMgr.openPanel((_crd && PanelName === void 0 ? (_reportPossibleCrUseOfPanelName({
              error: Error()
            }), PanelName) : PanelName).GameStartMenuView);
          } //this._gameMgr.start();

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
//# sourceMappingURL=78f99b9503a35739c1662889eebd3771d6df0e7d.js.map