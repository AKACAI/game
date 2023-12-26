System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, Vec2, Graphics, PolygonCollider2D, RigidBody2D, ERigidBody2DType, Phy_Group, LogManager, _dec, _class, _crd, ccclass, property, ObjectBase;

  function _reportPossibleCrUseOfPhy_Group(extras) {
    _reporterNs.report("Phy_Group", "../../manager/game_manager/GameDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseParam(extras) {
    _reporterNs.report("MouseParam", "../../manager/game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "../ui/game_tip/GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../utils/LogManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      Graphics = _cc.Graphics;
      PolygonCollider2D = _cc.PolygonCollider2D;
      RigidBody2D = _cc.RigidBody2D;
      ERigidBody2DType = _cc.ERigidBody2DType;
    }, function (_unresolved_2) {
      Phy_Group = _unresolved_2.Phy_Group;
    }, function (_unresolved_3) {
      LogManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9be97+GJDREJqjt/0NnfVJY", "ObjectBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Color', 'Vec2', 'Graphics', 'PolygonCollider2D', 'RigidBody2D', 'ERigidBody2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectBase", ObjectBase = (_dec = ccclass('ObjectBase'), _dec(_class = class ObjectBase extends Component {
        constructor() {
          super(...arguments);
          this.defaultLineWidth = 2;
          this.defaultLineColor = Color.BLACK;
          this.defaultFillColor = Color.WHITE;
        }

        create() {
          this._graphics = this.node.getComponent(Graphics);

          if (!this._graphics) {
            this._graphics = this.node.addComponent(Graphics);
          }

          this._collider = this.node.getComponent(PolygonCollider2D);

          if (!this._collider) {
            this._collider = this.node.addComponent(PolygonCollider2D);
          }

          this._rigidbody = this.node.getComponent(RigidBody2D);

          if (!this._rigidbody) {
            this._rigidbody = this.node.addComponent(RigidBody2D);
          }
        }

        init(objectType, info, objectParam) {
          var vertices = info;

          if (!vertices || vertices.length < 3) {
            console.log("生成的物体的顶点数不能小于3");
            return;
          }

          if (!objectParam) {
            return;
          }

          this._graphics = this.node.getComponent(Graphics);

          if (!this._graphics) {
            this._graphics = this.node.addComponent(Graphics);
          }

          this._collider = this.node.getComponent(PolygonCollider2D);

          if (!this._collider) {
            this._collider = this.node.addComponent(PolygonCollider2D);
          }

          this._rigidbody = this.node.getComponent(RigidBody2D);

          if (!this._rigidbody) {
            this._rigidbody = this.node.addComponent(RigidBody2D);
          }

          this._objectType = objectType;
          this._localVertices = vertices;
          this._name = objectParam.name;
          this._phyGroup = objectParam.phyGroup;
          this._isStatic = objectParam.isStatic;
          this._lineWidth = objectParam.lineWidth ? objectParam.lineWidth : this.defaultLineWidth;
          this._lineColor = objectParam.lineColor ? objectParam.lineColor : this.defaultLineColor;
          this._fillColor = objectParam.fillColor ? objectParam.fillColor : this.defaultFillColor;
          this._tipData = [];
          this.initPolygon();
          this.initCollider();
          this.initDynamic();
        }

        initPolygon() {
          this._graphics.lineWidth = this._lineWidth;
          this._graphics.color = this._lineColor;
          this._graphics.fillColor = this._fillColor;
          var vertices = this._localVertices;

          this._graphics.moveTo(vertices[0].x, vertices[0].y);

          for (var i = 1; i < vertices.length; i++) {
            this._graphics.lineTo(vertices[i].x, vertices[i].y);
          }

          this._graphics.close();

          this._graphics.stroke();

          this._graphics.fill();
        }

        initCollider() {
          this._collider.points = this._localVertices;

          if (this._phyGroup) {
            this._collider.group = this._phyGroup;
          } else {
            this._collider.group = (_crd && Phy_Group === void 0 ? (_reportPossibleCrUseOfPhy_Group({
              error: Error()
            }), Phy_Group) : Phy_Group).GAMEOBJECT;
          }
        }

        initDynamic() {
          if (this._phyGroup) {
            this._rigidbody.group = this._phyGroup;
          } else {
            this._rigidbody.group = (_crd && Phy_Group === void 0 ? (_reportPossibleCrUseOfPhy_Group({
              error: Error()
            }), Phy_Group) : Phy_Group).GAMEOBJECT;
          }

          if (this._isStatic) {
            this._rigidbody.type = ERigidBody2DType.Static;
          } else {
            this._rigidbody.type = ERigidBody2DType.Dynamic;
          }
        }

        setTipData(data) {
          this._tipData = data;
        }

        getTipData() {
          return this._tipData;
        }

        getType() {
          return this._objectType;
        }

        getObjectParam() {
          return {
            name: this._name,
            lineWidth: this._lineWidth,
            lineColor: this._lineColor,
            fillColor: this._fillColor
          };
        } // 碰撞体内是否包含点
        // https://blog.csdn.net/zsjzliziyang/article/details/108813349


        contains(pointPos) {
          var crossings = 0;
          var nodePos = this.node.getWorldPosition();
          var vertices = [];

          this._localVertices.forEach(vertex => {
            vertices.push(new Vec2(vertex.x + nodePos.x, vertex.y + nodePos.y));
          });

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

        mouseOnObject(isMouseOn, param) {}

        pause() {
          this._rigidbody.sleep();
        }

        resume() {
          this._rigidbody.wakeUp();

          (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
            error: Error()
          }), LogManager) : LogManager).log(this._rigidbody.linearVelocity);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08bdfc8b09e19abb1d87fcc0625a40e4eac22a76.js.map