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
        static log(content, color) {
          if (color) {
            console.log(`%c${content}`, `color:${color.toString()}`);
          } else {
            console.log(content);
          }
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
//# sourceMappingURL=800fc70501c7242909509d59a2b578c53f34314a.js.map