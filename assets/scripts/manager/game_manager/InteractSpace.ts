import { _decorator, Component, Node, Vec2, Vec3, v2 } from 'cc';
import { ObjectBase } from '../../modules/game/ObjectBase';
import { MouseParam } from '../InputManager';
const { ccclass, property } = _decorator;

@ccclass('InteractSpace')
export class InteractSpace {
    private objectBase: ObjectBase;

    private localVertices: Vec2[];

    constructor(objectBase: ObjectBase) {
        this.objectBase = objectBase;
        this.localVertices = objectBase.getLocalVertices();
    }

    // 碰撞体内是否包含点
    // https://blog.csdn.net/zsjzliziyang/article/details/108813349
    public contains(pointPos: Vec2): boolean {
        let crossings = 0;

        let nodePos = this.objectBase.node.getWorldPosition();
        let vertices = [];
        if (this.localVertices) {
            this.localVertices.forEach(vertex => {
                let rotation: Vec3 = new Vec3();
                this.objectBase.node.rotation.getEulerAngles(rotation);
                let angle = -Math.PI * rotation.z / 180;
                let x = vertex.x * Math.cos(angle) + vertex.y * Math.sin(angle);
                let y = -vertex.x * Math.sin(angle) + vertex.y * Math.cos(angle);
                vertices.push(new Vec2(x + nodePos.x, y + nodePos.y));
            })
        }
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

    private forceId = 0;
    public onMouseEnterSpace(param: MouseParam) {
        this.forceId = this.objectBase.addForce(v2(10, 0));
    }

    public onMouseLeaveSpace(param: MouseParam) {
        this.objectBase.removeForce(this.forceId);
    }

}


