System.register(["__unresolved_0", "cc", "Singleton", "game_manager/GameManager", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Singleton, _decorator, Node, GameManager, ObjectBase, RightTriangleObject, SquareObject, _dec, _class, _crd, ccclass, property, ObjectFactory, ObjectType, objectType2component;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "./ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRightTriangleObject(extras) {
    _reporterNs.report("RightTriangleObject", "./game_objects/RightTriangleObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSquareObject(extras) {
    _reporterNs.report("SquareObject", "./game_objects/SquareObject", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_Singleton) {
      Singleton = _Singleton.Singleton;
    }, function (_game_managerGameManager) {
      GameManager = _game_managerGameManager.GameManager;
    }, function (_unresolved_2) {
      ObjectBase = _unresolved_2.ObjectBase;
    }, function (_unresolved_3) {
      RightTriangleObject = _unresolved_3.RightTriangleObject;
    }, function (_unresolved_4) {
      SquareObject = _unresolved_4.SquareObject;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6777cKeSlNYbMDxGBebWEH", "ObjectFactory", undefined);

      __checkObsolete__(['_decorator', 'Vec3', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectFactory", ObjectFactory = (_dec = ccclass('ObjectFactory'), _dec(_class = class ObjectFactory extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        init() {
          this.map_root = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance().gameRoot.getChildByName("map_root");
          this.objects_pre = [];
        }

        createObject(type) {
          let newNode = new Node();
          newNode.setParent(this.map_root);
          newNode.active = false;
          let component = newNode.addComponent(objectType2component[type]);
          component.create();
          this.objects_pre.push(component);
          return component;
        }

        getObject(type, shapeParam, pos, objectData, parent) {
          let object = this.objects_pre.shift();

          if (!object) {
            object = this.createObject(type);
            object = this.objects_pre.shift();
          }

          object.node.name = objectData.name;
          object.node.setParent(parent ? parent : this.map_root);
          object.node.setPosition(pos);
          object.init(type, shapeParam, objectData);
          object.node.active = true;
          return object;
        }

        givebackObject(object) {
          object.node.active = false;
          this.objects_pre.push(object);
        }

        destroyObject(object) {
          object.node.destroy();
        }

      }) || _class));

      _export("ObjectType", ObjectType = /*#__PURE__*/function (ObjectType) {
        ObjectType[ObjectType["Square"] = 1] = "Square";
        ObjectType[ObjectType["RightTriangle"] = 2] = "RightTriangle";
        return ObjectType;
      }({}));

      objectType2component = {
        [ObjectType.Square]: (_crd && SquareObject === void 0 ? (_reportPossibleCrUseOfSquareObject({
          error: Error()
        }), SquareObject) : SquareObject) || (_crd && ObjectBase === void 0 ? (_reportPossibleCrUseOfObjectBase({
          error: Error()
        }), ObjectBase) : ObjectBase),
        [ObjectType.RightTriangle]: (_crd && RightTriangleObject === void 0 ? (_reportPossibleCrUseOfRightTriangleObject({
          error: Error()
        }), RightTriangleObject) : RightTriangleObject) || (_crd && ObjectBase === void 0 ? (_reportPossibleCrUseOfObjectBase({
          error: Error()
        }), ObjectBase) : ObjectBase)
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86e78dbde61fa610b79a16d7aa6dd9082feebc30.js.map