System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Vec3, Utils, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
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
          var result = target;
          if (target > max) result = max;else if (target < min) result = min;
          return result;
        }

        static vec2color(vec) {
          var x = Utils.clamp(vec.x, 0, 255);
          var y = Utils.clamp(vec.y, 0, 255);
          var z = Utils.clamp(vec.z, 0, 255);
          console.log(x, y, z);
          return new Color(x, y, z);
        }

        static vec2ToVec3(vec) {
          return new Vec3(vec.x, vec.y, 0);
        }

        static str2vec3(str) {
          str = str.replace(/{/, "");
          str = str.replace(/}/, "");
          var infos = str.split(',');
          return new Vec3(Number(infos[0]), Number(infos[1]), Number(infos[2]));
        }

        static str2color(str) {
          str = str.replace("#", "");
          var r_val = str.substring(0, 2);
          var g_val = str.substring(2, 2);
          var b_val = str.substring(4, 2);
          return new Color(parseInt(r_val, 16), parseInt(g_val, 16), parseInt(b_val, 16));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17c4a1931a025bab5f5ec79b9112ddd6d9155e9f.js.map