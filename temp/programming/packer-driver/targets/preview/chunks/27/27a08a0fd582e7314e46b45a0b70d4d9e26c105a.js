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
        static log() {
          for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
            param[_key] = arguments[_key];
          }

          console.log(param);
        }

        static warn() {
          for (var _len2 = arguments.length, param = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            param[_key2] = arguments[_key2];
          }

          console.warn(param);
        }

        static error() {
          for (var _len3 = arguments.length, param = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            param[_key3] = arguments[_key3];
          }

          console.error(param);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27a08a0fd582e7314e46b45a0b70d4d9e26c105a.js.map