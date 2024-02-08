System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LogManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc610B/JvRDv7ox5HwFFyOD", "LogManager", undefined);

      __checkObsolete__(['Color']);

      _export("default", LogManager = class LogManager {
        static log(...param) {
          console.log(param);
        }

        static warn(...param) {
          console.warn(param);
        }

        static error(...param) {
          console.error(param);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e556ef1914a80d5bf96266e7f9ae21474b6f03e5.js.map