System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Vec3, LogManager, Utils, _crd;

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "./LogManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      LogManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb08d7sE9JJIpE6AnD4RWO6", "Utils", undefined);

      __checkObsolete__(['Color', 'Vec2', 'Vec3']);

      _export("default", Utils = class Utils {
        static getCurTimeStamp() {
          return Date.now();
        }

        static clamp(target, min, max) {
          let result = target;
          if (target > max) result = max;else if (target < min) result = min;
          return result;
        }

        static vec2color(vec) {
          let x = Utils.clamp(vec.x, 0, 255);
          let y = Utils.clamp(vec.y, 0, 255);
          let z = Utils.clamp(vec.z, 0, 255);
          console.log(x, y, z);
          return new Color(x, y, z);
        }

        static vec2ToVec3(vec) {
          return new Vec3(vec.x, vec.y, 0);
        }

        static str2vec3(str) {
          str = str.replace(/{/, "");
          str = str.replace(/}/, "");
          let infos = str.split(',');
          return new Vec3(Number(infos[0]), Number(infos[1]), Number(infos[2]));
        }

        static str2color(str) {
          str = str.replace("#", "");
          let r_val = str.substring(0, 2);
          let g_val = str.substring(2, 4);
          let b_val = str.substring(4, 6);
          let r = parseInt(r_val, 16);
          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log(r);
          return new Color(parseInt(r_val, 16), parseInt(g_val, 16), parseInt(b_val, 16));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8eb52295032cd52e4babcd65beee0770624a144.js.map