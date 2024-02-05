System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, Vec2, Graphics, PolygonCollider2D, RigidBody2D, ERigidBody2DType, Vec3, Phy_Group, InteractSpace, _dec, _class, _crd, ccclass, property, ObjectBase, ForceType, ObjectVisualTag;

  function _reportPossibleCrUseOfPhy_Group(extras) {
    _reporterNs.report("Phy_Group", "../../manager/game_manager/GameDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "../ui/game_tip/GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectType(extras) {
    _reporterNs.report("ObjectType", "./ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInteractSpace(extras) {
    _reporterNs.report("InteractSpace", "../../manager/game_manager/InteractSpace", _context.meta, extras);
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
      InteractSpace = _unresolved_3.InteractSpace;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9be97+GJDREJqjt/0NnfVJY", "ObjectBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Color', 'Vec2', 'Graphics', 'PolygonCollider2D', 'RigidBody2D', 'ERigidBody2DType', 'Vec3', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectBase", ObjectBase = (_dec = ccclass('ObjectBase'), _dec(_class = class ObjectBase extends Component {
        constructor(...args) {
          super(...args);
          this.defaultForceFrom = "from";
          this.defaultLineWidth = 2;
          this.defaultLineColor = Color.BLACK;
          this.defaultFillColor = Color.WHITE;
          this._markForceId = 0;
        }

        /**当前速度 */

        /**当前受力 */
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

        setObject(objectId, objectType, shapeParam, objectParam, physicsParam) {
          this._objectInfo = {
            id: objectId,
            name: objectParam.name,
            type: objectType
          };
          const vertices = shapeParam;

          if (!vertices || vertices.length < 3) {
            console.log("生成的物体的顶点数不能小于3");
            return;
          }

          if (!objectParam) {
            return;
          }

          let lineWidth = objectParam.lineWidth ? objectParam.lineWidth : this.defaultLineWidth;
          let lineColor = objectParam.lineColor ? objectParam.lineColor : this.defaultLineColor;
          let fillColor = objectParam.fillColor ? objectParam.fillColor : this.defaultFillColor;
          this.initPolygon({
            lineWidth: lineWidth,
            lineColor: lineColor,
            fillColor: fillColor,
            vertices: vertices
          });
          this._interactSpace = new (_crd && InteractSpace === void 0 ? (_reportPossibleCrUseOfInteractSpace({
            error: Error()
          }), InteractSpace) : InteractSpace)(this);
          this.initCollider({
            phyGroup: objectParam.phyGroup,
            physicsParam: physicsParam
          });
          this.initDynamic({
            phyGroup: objectParam.phyGroup,
            isStatic: objectParam.isStatic
          });
          this.reset();
        }

        initPolygon(data) {
          this._graphics.lineWidth = data.lineWidth;
          this._graphics.strokeColor = data.lineColor;
          this._graphics.fillColor = data.fillColor;
          this._localVertices = data.vertices;

          this._graphics.moveTo(this._localVertices[0].x, this._localVertices[0].y);

          for (let i = 1; i < this._localVertices.length; i++) {
            this._graphics.lineTo(this._localVertices[i].x, this._localVertices[i].y);
          }

          this._graphics.close();

          this._graphics.stroke();

          this._graphics.fill();
        }

        initCollider(data) {
          this._collider.points = this._localVertices;
          this._collider.group = data.phyGroup ? data.phyGroup : (_crd && Phy_Group === void 0 ? (_reportPossibleCrUseOfPhy_Group({
            error: Error()
          }), Phy_Group) : Phy_Group).GAMEOBJECT;
          this._collider.enabled = true; // 激活碰撞体

          this._collider.sensor = false; // 不是触发器

          this._collider.friction = data.physicsParam.friction;
        }

        initDynamic(data) {
          this._rigidbody.group = data.phyGroup ? data.phyGroup : (_crd && Phy_Group === void 0 ? (_reportPossibleCrUseOfPhy_Group({
            error: Error()
          }), Phy_Group) : Phy_Group).GAMEOBJECT;
          this._rigidbody.type = data.isStatic ? ERigidBody2DType.Static : ERigidBody2DType.Dynamic;
        }

        reset() {
          this._curSpeed = Vec2.ZERO;
          this._curForce = {};

          if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
          }
        }
        /** 增加受力 */


        addForce(force, type, from = this.defaultForceFrom) {
          if (!this._rigidbody) {
            return;
          }

          let id = ++this._markForceId;
          this._curForce[id] = {
            from: from,
            type: type,
            force: force
          };
          return id;
        }

        removeForce(forceId) {
          delete this._curForce[forceId];
        }

        getForce() {
          return this._curForce;
        }
        /**对该物体运用身上受到的力 */


        applyForce() {
          for (const id in this._curForce) {
            const forceItem = this._curForce[id];

            this._rigidbody.applyForceToCenter(forceItem.force, true);
          }
        }
        /** 设置速度 */


        setSpeed(speed) {
          if (!this._rigidbody) {
            return;
          }

          this._rigidbody.linearVelocity = speed;
        }

        setTipData(data) {
          this._objectInfo.tipData = data;
        }

        getObjectInfo() {
          return this._objectInfo;
        }

        getLocalVertices() {
          return this._localVertices;
        }

        getInteractSpace() {
          return this._interactSpace;
        } // 碰撞体内是否包含点
        // https://blog.csdn.net/zsjzliziyang/article/details/108813349


        contains(pointPos) {
          let crossings = 0;
          let nodePos = this.node.getWorldPosition();
          let vertices = [];

          this._localVertices.forEach(vertex => {
            let rotation = new Vec3();
            this.node.rotation.getEulerAngles(rotation);
            let angle = -Math.PI * rotation.z / 180;
            let x = vertex.x * Math.cos(angle) + vertex.y * Math.sin(angle);
            let y = -vertex.x * Math.sin(angle) + vertex.y * Math.cos(angle);
            vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));
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

        pause() {
          if (this._rigidbody) {
            this._curSpeed = this._rigidbody.linearVelocity;
            this._rigidbody.linearVelocity = Vec2.ZERO;
          }
        }

        resume() {
          if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
          }
        }

      }) || _class));

      _export("ForceType", ForceType = /*#__PURE__*/function (ForceType) {
        ForceType[ForceType["node"] = 1] = "node";
        ForceType[ForceType["friction"] = 2] = "friction";
        ForceType[ForceType["elasticForce"] = 3] = "elasticForce";
        return ForceType;
      }({}));

      _export("ObjectVisualTag", ObjectVisualTag = /*#__PURE__*/function (ObjectVisualTag) {
        ObjectVisualTag[ObjectVisualTag["background"] = 1] = "background";
        ObjectVisualTag[ObjectVisualTag["middle"] = 2] = "middle";
        ObjectVisualTag[ObjectVisualTag["front"] = 3] = "front";
        return ObjectVisualTag;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86a662f532bb777808a18e2b1489e4fbac1a1c51.js.map