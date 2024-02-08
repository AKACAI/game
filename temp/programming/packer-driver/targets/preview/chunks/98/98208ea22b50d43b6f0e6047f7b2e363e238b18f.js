System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Singleton, _dec, _class, _crd, ccclass, property, Display;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Singleton", _context.meta, extras);
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
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0cb0D9n55CdJIV4uIG817A", "Display", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Display", Display = (_dec = ccclass('Display'), _dec(_class = class Display extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
        }

        init() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=98208ea22b50d43b6f0e6047f7b2e363e238b18f.js.map