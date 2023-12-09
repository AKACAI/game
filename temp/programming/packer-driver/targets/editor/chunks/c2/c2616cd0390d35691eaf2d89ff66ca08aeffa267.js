System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, ObjectBase, _dec, _class, _crd, ccclass, property, SquareObject;

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "../../ui/game_tip/GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectParam(extras) {
    _reporterNs.report("ObjectParam", "../ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "../ObjectFactory", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ObjectBase = _unresolved_2.ObjectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b005aSOGrZB6798Rz5O3kYI", "SquareObject", undefined);

      __checkObsolete__(['_decorator', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SquareObject", SquareObject = (_dec = ccclass('SquareObject'), _dec(_class = class SquareObject extends (_crd && ObjectBase === void 0 ? (_reportPossibleCrUseOfObjectBase({
        error: Error()
      }), ObjectBase) : ObjectBase) {
        init(objectType, shapeParam, objectParam) {
          this._width = shapeParam.width;
          this._height = shapeParam.height;
          let vertices = [new Vec2(-this._width / 2, -this._height / 2), new Vec2(this._width / 2, -this._height / 2), new Vec2(this._width / 2, this._height / 2), new Vec2(-this._width / 2, this._height / 2)];
          super.init(objectType, vertices, objectParam);
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
//# sourceMappingURL=c2616cd0390d35691eaf2d89ff66ca08aeffa267.js.map