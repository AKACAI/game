System.register(["__unresolved_0", "cc", "game/ObjectBase"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, ObjectBase, _dec, _class, _crd, ccclass, property, SquareObject;

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
      Vec2 = _cc.Vec2;
    }, function (_gameObjectBase) {
      ObjectBase = _gameObjectBase.ObjectBase;
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
          var vertices = [new Vec2(-this._width / 2, -this._height / 2), new Vec2(this._width / 2, -this._height / 2), new Vec2(this._width / 2, this._height / 2), new Vec2(-this._width / 2, this._height / 2)];
          super.init(objectType, vertices, objectParam);
          var tipsData = [{
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
//# sourceMappingURL=e1522a87889b3899d7c4dd62cea8a9b8fa1daff8.js.map