System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Singleton, GameManager, ObjectBase, RightTriangleObject, SquareObject, _dec, _class, _crd, ccclass, property, ObjectFactory, ObjectType, objectType2component;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../../manager/game_manager/GameManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../../common/IPreInit", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      ObjectBase = _unresolved_4.ObjectBase;
    }, function (_unresolved_5) {
      RightTriangleObject = _unresolved_5.RightTriangleObject;
    }, function (_unresolved_6) {
      SquareObject = _unresolved_6.SquareObject;
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

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
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
//# sourceMappingURL=97dc0eae29af7e2d77ab2b9bc4dde13e0df8aa1c.js.map