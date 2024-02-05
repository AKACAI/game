System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameApp, ResManager, TimerManager, _dec, _class, _crd, ccclass, property, GameLaunch;

  function _reportPossibleCrUseOfGameApp(extras) {
    _reporterNs.report("GameApp", "./GameApp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "./manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerManager(extras) {
    _reporterNs.report("TimerManager", "./manager/TimerManager", _context.meta, extras);
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
      GameApp = _unresolved_2.GameApp;
    }, function (_unresolved_3) {
      ResManager = _unresolved_3.ResManager;
    }, function (_unresolved_4) {
      TimerManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b145cq5iMVAvpOJVChEoPit", "GameLaunch", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameLaunch", GameLaunch = (_dec = ccclass('GameLaunch'), _dec(_class = class GameLaunch extends Component {
        onLoad() {
          (_crd && TimerManager === void 0 ? (_reportPossibleCrUseOfTimerManager({
            error: Error()
          }), TimerManager) : TimerManager).init();
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().init(); // NetManager.init();

          this.addComponent(_crd && GameApp === void 0 ? (_reportPossibleCrUseOfGameApp({
            error: Error()
          }), GameApp) : GameApp).gameLaunch();
        }

        update() {
          (_crd && TimerManager === void 0 ? (_reportPossibleCrUseOfTimerManager({
            error: Error()
          }), TimerManager) : TimerManager).update();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c18238ee369db3fd3b2793b8332309a2a53e5245.js.map