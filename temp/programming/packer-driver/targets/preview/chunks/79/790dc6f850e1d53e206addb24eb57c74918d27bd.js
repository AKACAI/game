System.register(["__unresolved_0", "cc", "Utils", "game/ObjectBase"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Utils, _decorator, UITransform, Vec2, ObjectBase, _dec, _class, _crd, ccclass, property, RightTriangleObject;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectParam(extras) {
    _reporterNs.report("ObjectParam", "game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "game/ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "ui/game_tip/GameTipItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_Utils) {
      Utils = _Utils.default;
    }, function (_gameObjectBase) {
      ObjectBase = _gameObjectBase.ObjectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "494ea+NcSFD/qo+Zd1Yv+tE", "RightTriangleObject", undefined);

      __checkObsolete__(['_decorator', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RightTriangleObject", RightTriangleObject = (_dec = ccclass('RightTriangleObject'), _dec(_class = class RightTriangleObject extends (_crd && ObjectBase === void 0 ? (_reportPossibleCrUseOfObjectBase({
        error: Error()
      }), ObjectBase) : ObjectBase) {
        init(objectType, shapeParam, objectParam) {
          // TODO 三个点的计算应该有问题
          var transformCpt = this.node.addComponent(UITransform);

          if (shapeParam.angle < 0 && shapeParam.angle > -90) {
            transformCpt.setAnchorPoint(1, 0);
          } else if (shapeParam.angle > 0 && shapeParam.angle < 90) {
            transformCpt.setAnchorPoint(0, 0);
          } else {
            console.warn("创建三角形时，角度必须在-90~90并且不为0");
            return;
          }

          this._height = shapeParam.height;
          this._angle = shapeParam.angle;
          var angleAbs = Math.abs(this._angle);
          var length;

          if (this._angle < 0) {
            length = -this._height / Math.tan(angleAbs / 18 * 5);
          } else {
            length = this._height / Math.tan(angleAbs / 18 * 5);
          }

          var vertices = [new Vec2(0, 0), new Vec2(length, 0), new Vec2(0, this._height)];
          var mObjectParam = {
            name: objectParam.name,
            phyGroup: objectParam.phyGroup,
            isStatic: objectParam.isStatic == 1,
            lineWidth: objectParam.lineWidth,
            lineColor: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).str2color(objectParam.lineColor),
            fillColor: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).str2color(objectParam.fillColor)
          };
          super.init(objectType, vertices, mObjectParam);
          var tipsData = [{
            tipContent: "高度为：" + this._height
          }, {
            tipContent: "倾斜角为：" + this._angle
          }];
          this.setTipData(tipsData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=790dc6f850e1d53e206addb24eb57c74918d27bd.js.map