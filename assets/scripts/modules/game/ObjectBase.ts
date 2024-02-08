import { _decorator, Component, Color, Vec2, Graphics, PolygonCollider2D, RigidBody2D, ERigidBody2DType, Vec3, v2 } from "cc";
import { Phy_Group } from "../../manager/game_manager/GameDefinition";
import { GameTipData } from "../ui/game_tip/GameTipItem";
import { ObjectType } from "./ObjectFactory";
import { InteractSpace } from "../../manager/game_manager/InteractSpace";
import { MouseParam } from "../../manager/InputManager";

const { ccclass, property } = _decorator;

@ccclass('ObjectBase')
export class ObjectBase extends Component {
    protected readonly defaultForceFrom: string = "from";
    protected readonly defaultLineWidth: number = 2;
    protected readonly defaultLineColor: Color = Color.BLACK;
    protected readonly defaultFillColor: Color = Color.WHITE;

    protected _localVertices: Vec2[];

    protected _objectInfo: ObjectInfo;

    protected _graphics: Graphics;
    protected _collider: PolygonCollider2D;
    protected _rigidbody: RigidBody2D;
    protected _interactSpace: InteractSpace;

    private _markForceId: number = 0;

    /**当前速度 */
    protected _curSpeed: Vec2;
    /**当前受力 */
    protected _curForce: { [id: number]: { from: string, force: Vec2, type: ForceType } };

    public create(): void {
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

    public setObject(objectId: number, objectType: ObjectType, shapeParam: any, objectParam: ObjectParam, physicsParam: PhysicsParam) {
        this._objectInfo = {
            id: objectId,
            name: objectParam.name,
            type: objectType,
        };
        const vertices = shapeParam as Vec2[];
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
        this.initPolygon({ lineWidth: lineWidth, lineColor: lineColor, fillColor: fillColor, vertices: vertices });
        this._interactSpace = new InteractSpace(this);
        this.initCollider({ phyGroup: objectParam.phyGroup, physicsParam: physicsParam });
        this.initDynamic({ phyGroup: objectParam.phyGroup, isStatic: objectParam.isStatic });
        this.reset();
    }

    protected initPolygon(data: { lineWidth: number, lineColor: Color, fillColor: Color, vertices: Vec2[] }) {
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

    protected initCollider(data: { phyGroup: Phy_Group, physicsParam: PhysicsParam }) {
        this._collider.points = this._localVertices;
        this._collider.group = data.phyGroup ? data.phyGroup : Phy_Group.GAMEOBJECT;
        this._collider.enabled = true;      // 激活碰撞体
        this._collider.sensor = false;      // 不是触发器
        this._collider.friction = data.physicsParam.friction;
    }

    protected initDynamic(data: { phyGroup: Phy_Group, isStatic: boolean }) {
        this._rigidbody.group = data.phyGroup ? data.phyGroup : Phy_Group.GAMEOBJECT;
        this._rigidbody.type = data.isStatic ? ERigidBody2DType.Static : ERigidBody2DType.Dynamic;
    }

    protected reset() {
        this._curSpeed = Vec2.ZERO;
        this._curForce = {};
        if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
        }

    }

    /** 增加受力 */
    public addForce(force: Vec2, type?: ForceType, from: string = this.defaultForceFrom): number {
        if (!this._rigidbody) {
            return;
        }
        let id = ++this._markForceId;
        this._curForce[id] = { from: from, type: type, force: force };
        return id;
    }

    public removeForce(forceId: number) {
        delete this._curForce[forceId];
    }

    public getForce() {
        return this._curForce;
    }

    /**对该物体运用身上受到的力 */
    public applyForce() {
        for (const id in this._curForce) {
            const forceItem = this._curForce[id];
            this._rigidbody.applyForceToCenter(forceItem.force, true);
        }
    }

    /** 设置速度 */
    public setSpeed(speed: Vec2) {
        if (!this._rigidbody) {
            return;
        }
        this._rigidbody.linearVelocity = speed;
    }

    public setTipData(data: GameTipData[]) {
        this._objectInfo.tipData = data;
    }

    public getObjectInfo(): ObjectInfo {
        return this._objectInfo;
    }

    public getLocalVertices(): Vec2[] {
        return this._localVertices;
    }

    public getInteractSpace() {
        return this._interactSpace;
    }

    // 碰撞体内是否包含点
    // https://blog.csdn.net/zsjzliziyang/article/details/108813349
    public contains(pointPos: Vec2): boolean {
        let crossings = 0;

        let nodePos = this.node.getWorldPosition();
        let vertices = [];
        this._localVertices.forEach(vertex => {
            let rotation: Vec3 = new Vec3();
            this.node.rotation.getEulerAngles(rotation);
            let angle = -Math.PI * rotation.z / 180;
            let x = vertex.x * Math.cos(angle) + vertex.y * Math.sin(angle);
            let y = -vertex.x * Math.sin(angle) + vertex.y * Math.cos(angle);
            vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));
        })
        for (let i = 0; i < vertices.length; i++) {
            let curPos = vertices[i];
            let nextPos = (i + 1 == vertices.length) ? vertices[0] : vertices[i + 1];
            let slope = (nextPos.y - curPos.y) / (nextPos.x - curPos.x);
            let cond1 = (curPos.x <= pointPos.x) && (nextPos.x > pointPos.x);
            let cond2 = (nextPos.x <= pointPos.x) && (curPos.x > pointPos.x);
            let above = (pointPos.y < slope * (pointPos.x - curPos.x) + curPos.y);
            if ((cond1 || cond2) && above) {
                crossings++;
            }
        }
        return (crossings % 2 != 0);
    }

    public pause() {
        if (this._rigidbody) {
            this._curSpeed = this._rigidbody.linearVelocity;
            this._rigidbody.linearVelocity = Vec2.ZERO;
        }
    }

    public resume() {
        if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
        }
    }
}

export interface ObjectParam {
    name: string,
    phyGroup?: Phy_Group,
    isStatic?: boolean,
    lineWidth?: number,
    lineColor?: Color,
    fillColor?: Color,
}

export interface PhysicsParam {
    friction: number,
}

export enum ForceType {
    /**无性质力 */
    node = 1,
    /**摩擦力 */
    friction = 2,
    /**弹力 */
    elasticForce = 3
}

export enum ObjectVisualTag {
    background = 1,
    middle = 2,
    front = 3,
}

export interface ObjectInfo {
    id: number,
    name: string,
    type: ObjectType,
    tipData?: GameTipData[],
}