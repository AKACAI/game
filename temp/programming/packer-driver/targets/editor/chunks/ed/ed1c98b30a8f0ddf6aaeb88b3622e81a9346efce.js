System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, Vec3, _dec, _class, _crd, ccclass, property, InteractSpace;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fad7BMHjxLLqKGxx2jfhCV", "InteractManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractSpace", InteractSpace = (_dec = ccclass('InteractSpace'), _dec(_class = class InteractSpace {
        constructor(localVertices) {
          this.localVertices = localVertices;
        } // 碰撞体内是否包含点
        // https://blog.csdn.net/zsjzliziyang/article/details/108813349


        contains(pointPos) {
          let crossings = 0;
          let nodePos = this.objectBase.node.getWorldPosition();
          let vertices = [];

          if (this.localVertices) {
            this.localVertices.forEach(vertex => {
              let rotation = new Vec3();
              this.objectBase.node.rotation.getEulerAngles(rotation);
              let angle = -Math.PI * rotation.z / 180;
              let x = vertex.x * Math.cos(angle) + vertex.y * Math.sin(angle);
              let y = -vertex.x * Math.sin(angle) + vertex.y * Math.cos(angle);
              vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));
            });
          }

          for (let i = 0; i < vertices.length; i++) {
            let curPos = vertices[i];
            let nextPos = i + 1 == vertices.length ? vertices[0] : vertices[i + 1];
            let slope = (nextPos.y - curPos.y) / (nextPos.x - curPos.x);
            let cond1 = curPos.x <= pointPos.x && nextPos.x > pointPos.x;
            let cond2 = nextPos.x <= pointPos.x && curPos.x > pointPos.x;
            let above = pointPos.y < slope * (pointPos.x - curPos.x) + curPos.y;

            if ((cond1 || cond2) && above) {
              crossings++;
            }
          }

          return crossings % 2 != 0;
        }

        onMouseEnterSpace(param) {}

        onMouseLeaveSpace(param) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed1c98b30a8f0ddf6aaeb88b3622e81a9346efce.js.map