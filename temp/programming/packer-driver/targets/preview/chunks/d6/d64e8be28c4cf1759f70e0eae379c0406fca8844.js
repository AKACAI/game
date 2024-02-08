System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, Vec3, v2, _dec, _class, _crd, ccclass, property, InteractSpace;

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../../modules/game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseParam(extras) {
    _reporterNs.report("MouseParam", "../InputManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6ae7rJkixHFotHN+1sj4/7", "InteractSpace", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractSpace", InteractSpace = (_dec = ccclass('InteractSpace'), _dec(_class = class InteractSpace {
        constructor(localVertices) {
          this.forceId = 0;
          this.localVertices = localVertices;
        } // 碰撞体内是否包含点
        // https://blog.csdn.net/zsjzliziyang/article/details/108813349


        contains(pointPos) {
          var crossings = 0;
          var nodePos = this.objectBase.node.getWorldPosition();
          var vertices = [];

          if (this.localVertices) {
            this.localVertices.forEach(vertex => {
              var rotation = new Vec3();
              this.objectBase.node.rotation.getEulerAngles(rotation);
              var angle = -Math.PI * rotation.z / 180;
              var x = vertex.x * Math.cos(angle) + vertex.y * Math.sin(angle);
              var y = -vertex.x * Math.sin(angle) + vertex.y * Math.cos(angle);
              vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));
            });
          }

          for (var i = 0; i < vertices.length; i++) {
            var curPos = vertices[i];
            var nextPos = i + 1 == vertices.length ? vertices[0] : vertices[i + 1];
            var slope = (nextPos.y - curPos.y) / (nextPos.x - curPos.x);
            var cond1 = curPos.x <= pointPos.x && nextPos.x > pointPos.x;
            var cond2 = nextPos.x <= pointPos.x && curPos.x > pointPos.x;
            var above = pointPos.y < slope * (pointPos.x - curPos.x) + curPos.y;

            if ((cond1 || cond2) && above) {
              crossings++;
            }
          }

          return crossings % 2 != 0;
        }

        onMouseEnterSpace(param) {
          this.forceId = this.objectBase.addForce(v2(10, 0));
        }

        onMouseLeaveSpace(param) {
          this.objectBase.removeForce(this.forceId);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d64e8be28c4cf1759f70e0eae379c0406fca8844.js.map