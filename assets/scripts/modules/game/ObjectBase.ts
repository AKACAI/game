import { _decorator, Component, Color, Vec2, Graphics, PolygonCollider2D, RigidBody2D, ERigidBody2DType, Vec3 } from "cc";
import { Phy_Group } from "../../manager/game_manager/GameDefinition";
import { MouseParam } from "../../manager/game_manager/GameManager";
import { GameTipData } from "../ui/game_tip/GameTipItem";
import { ObjectType } from "./ObjectFactory";

const { ccclass, property } = _decorator;

@ccclass('ObjectBase')
export class ObjectBase extends Component {
    protected readonly defaultLineWidth: number = 2;
    protected readonly defaultLineColor: Color = Color.BLACK;
    protected readonly defaultFillColor: Color = Color.WHITE;

    protected _objectType: ObjectType;
    protected _localVertices: Vec2[];
    protected _phyGroup: Phy_Group;
    protected _isStatic: boolean;

    protected _name: string;
    protected _lineWidth: number;
    protected _lineColor: Color;
    protected _fillColor: Color;
    protected _tipData: GameTipData[];

    protected _graphics: Graphics;
    protected _collider: PolygonCollider2D;
    protected _rigidbody: RigidBody2D;

    protected _curSpeed: Vec2;

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

    public init(objectType: ObjectType, info: any, objectParam: ObjectParam) {
        let vertices = info as Vec2[];
        if (!vertices || vertices.length < 3) {
            console.log("生成的物体的顶点数不能小于3");
            return;
        }
        if (!objectParam) {
            return
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

    protected initPolygon() {
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

    protected initCollider() {
        this._collider.points = this._localVertices;
        if (this._phyGroup) {
            this._collider.group = this._phyGroup;
        }
        else {
            this._collider.group = Phy_Group.GAMEOBJECT;
        }
        this._collider.enabled = true;      // 激活碰撞体
        this._collider.sensor = false;      // 不是触发器
    }

    protected initDynamic() {
        if (this._phyGroup) {
            this._rigidbody.group = this._phyGroup;
        }
        else {
            this._rigidbody.group = Phy_Group.GAMEOBJECT;
        }
        if (this._isStatic) {
            this._rigidbody.type = ERigidBody2DType.Static;
        }
        else {
            this._rigidbody.type = ERigidBody2DType.Dynamic;
            this.addForce(new Vec2(0, -10));
        }
    }

    protected reset() {
        this._curSpeed = Vec2.ZERO;
        if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
        }
    }

    public setTipData(data: GameTipData[]) {
        this._tipData = data;
    }

    public getTipData(): GameTipData[] {
        return this._tipData;
    }

    public getType(): ObjectType {
        return this._objectType;
    }

    public getObjectParam(): ObjectParam {
        return {
            name: this._name,
            lineWidth: this._lineWidth,
            lineColor: this._lineColor,
            fillColor: this._fillColor,
        }
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

    public mouseOnObject(isMouseOn: boolean, param: MouseParam) {

    }

    public pause() {
        //LogManager.log("AAAAAAAAAA", this._rigidbody.linearVelocity)
        if (this._rigidbody) {
            this._curSpeed = this._rigidbody.linearVelocity;
            this._rigidbody.linearVelocity = Vec2.ZERO;
        }
    }

    public resume() {
        //LogManager.log("BBBBBBBBBB", this._rigidbody.linearVelocity)
        if (this._rigidbody) {
            this._rigidbody.linearVelocity = this._curSpeed;
        }
    }

    public addForce(value: Vec2) {
        this._rigidbody.applyForce(value, new Vec2(this.node.position.x, this.node.position.y), true);
    }

    // public addForce(x: number, y: number) {
    //     this._rigidbody.applyForce(value, new Vec2(this.node.position.x, this.node.position.y), true);
    // }
}

export interface ObjectParam {
    name: string,
    phyGroup?: Phy_Group,
    isStatic?: boolean,
    lineWidth?: number,
    lineColor?: Color,
    fillColor?: Color,
}