System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, Vec2, Graphics, PolygonCollider2D, RigidBody2D, ERigidBody2DType, Vec3, Phy_Group, LogManager, _dec, _class, _crd, ccclass, property, ObjectBase;

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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Phy_Group = _unresolved_2.Phy_Group;
    }, function (_unresolved_3) {
      LogManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9be97+GJDREJqjt/0NnfVJY", "ObjectBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Color', 'Vec2', 'Graphics', 'PolygonCollider2D', 'RigidBody2D', 'ERigidBody2DType', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectBase", ObjectBase = (_dec = ccclass('ObjectBase'), _dec(_class = class ObjectBase extends Component {
        constructor(...args) {
          super(...args);
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
          let vertices = info;

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
          this.reset();
        }

        initPolygon() {
          this._graphics.lineWidth = this._lineWidth;
          this._graphics.strokeColor = this._lineColor;
          this._graphics.fillColor = this._fillColor;
          let vertices = this._localVertices;

          this._graphics.moveTo(vertices[0].x, vertices[0].y);

          for (let i = 1; i < vertices.length; i++) {
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

          this._collider.enabled = true; // 激活碰撞体

          this._collider.sensor = false; // 不是触发器
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

        reset() {
          this._curSpeed = Vec2.ZERO;

          if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
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
          let crossings = 0;
          let nodePos = this.node.getWorldPosition();
          let vertices = [];

          this._localVertices.forEach(vertex => {
            let rotation = new Vec3();
            this.node.rotation.getEulerAngles(rotation);
            let x = -vertex.x * Math.cos(rotation.z) - vertex.y * Math.sin(rotation.z);
            let y = vertex.x * Math.sin(rotation.z) - vertex.y * Math.cos(rotation.z);
            vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));

            if (vertices.length == 3) {
              (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
                error: Error()
              }), LogManager) : LogManager).log("AAAAAAAA", vertex, rotation.z, vertices);
            }
          });

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

        mouseOnObject(isMouseOn, param) {}

        pause() {
          //LogManager.log("AAAAAAAAAA", this._rigidbody.linearVelocity)
          if (this._rigidbody) {
            this._curSpeed = this._rigidbody.linearVelocity;
            this._rigidbody.linearVelocity = Vec2.ZERO;
          }
        }

        resume() {
          //LogManager.log("BBBBBBBBBB", this._rigidbody.linearVelocity)
          if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e65dd25bd09e49fec03d1e753b3eb6ab2287741.js.map