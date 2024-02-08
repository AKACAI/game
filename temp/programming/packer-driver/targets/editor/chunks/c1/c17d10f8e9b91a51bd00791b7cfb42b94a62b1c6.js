System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, view, Singleton, LogManager, _dec, _class, _crd, ccclass, property, Display;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../utils/LogManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      view = _cc.view;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      LogManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0cb0D9n55CdJIV4uIG817A", "Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'math', 'Node', 'Vec2', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Display", Display = (_dec = ccclass('Display'), _dec(_class = class Display extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
          this.windowSize = undefined;
          this.init();
        }

        init() {
          this.windowSize = view.getVisibleSize();
        }

        getWindowSize() {
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log(this.windowSize);
          return this.windowSize;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c17d10f8e9b91a51bd00791b7cfb42b94a62b1c6.js.map