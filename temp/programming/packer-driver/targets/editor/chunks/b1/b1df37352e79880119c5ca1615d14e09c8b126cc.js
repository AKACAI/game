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
        static log(content, ...param) {
          console.log(content);
        }

        static warn(content) {
          console.warn(content);
        }

        static error(content) {
          console.error(content);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1df37352e79880119c5ca1615d14e09c8b126cc.js.map