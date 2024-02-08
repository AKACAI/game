System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, UITransform, ObjectBase, Utils, _dec, _class, _crd, ccclass, property, SquareObject;

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "../../ui/game_tip/GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectParam(extras) {
    _reporterNs.report("ObjectParam", "../ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhysicsParam(extras) {
    _reporterNs.report("PhysicsParam", "../ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "../ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ObjectBase = _unresolved_2.ObjectBase;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b005aSOGrZB6798Rz5O3kYI", "SquareObject", undefined);

      __checkObsolete__(['_decorator', 'Vec2', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SquareObject", SquareObject = (_dec = ccclass('SquareObject'), _dec(_class = class SquareObject extends (_crd && ObjectBase === void 0 ? (_reportPossibleCrUseOfObjectBase({
        error: Error()
      }), ObjectBase) : ObjectBase) {
        setObject(objectId, objectType, shapeParam, objectParam, physicsParam) {
          this._width = shapeParam.width;
          this._height = shapeParam.height;
          let transformCpt = this.node.getComponent(UITransform);

          if (!transformCpt) {
            transformCpt = this.node.addComponent(UITransform);
          }

          transformCpt.setAnchorPoint(0.5, 0);
          let vertices = [new Vec2(-this._width / 2, 0), new Vec2(this._width / 2, 0), new Vec2(this._width / 2, this._height), new Vec2(-this._width / 2, this._height)];
          let mObjectParam = {
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
          super.setObject(objectId, objectType, vertices, mObjectParam, physicsParam);
          let tipsData = [{
            tipContent: "宽度为：" + this._width
          }, {
            tipContent: "高度为：" + this._height
          }];
          this.setTipData(tipsData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abfa78341012608b7e22ef2b62cae246a00d7dcf.js.map