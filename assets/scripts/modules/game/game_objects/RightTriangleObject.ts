import { _decorator, UITransform, Vec2 } from "cc";
import Utils from "../../../utils/Utils";
import { GameTipData } from "../../ui/game_tip/GameTipItem";
import { ObjectBase, ObjectParam, PhysicsParam } from "../ObjectBase";
import { ObjectType } from "../ObjectFactory";

const { ccclass, property } = _decorator;

@ccclass('RightTriangleObject')
export class RightTriangleObject extends ObjectBase {
    protected _height: number;
    protected _angle: number;

    public setObject(objectId: number, objectType: ObjectType, shapeParam: any, objectParam: any, physicsParam: PhysicsParam): void {
        let transformCpt = this.node.getComponent(UITransform);
        if (!transformCpt) {
            transformCpt = this.node.addComponent(UITransform);
        }
        if (shapeParam.angle < 0 && shapeParam.angle > -90) {
            transformCpt.setAnchorPoint(1, 0);
        }
        else if (shapeParam.angle > 0 && shapeParam.angle < 90) {
            transformCpt.setAnchorPoint(0, 0);
        }
        else {
            console.warn("创建三角形时，角度必须在-90~90并且不为0");
            return;
        }
        this._height = shapeParam.height;
        this._angle = shapeParam.angle;
        let length = -this._height * Math.tan(this._angle / 18 * 5);
        let vertices: Vec2[] = [
            new Vec2(0, 0),
            new Vec2(length, 0),
            new Vec2(0, this._height),
        ]
        let mObjectParam: ObjectParam = {
            name: objectParam.name,
            phyGroup: objectParam.phyGroup,
            isStatic: objectParam.isStatic == 1,
            lineWidth: objectParam.lineWidth,
            lineColor: Utils.str2color(objectParam.lineColor),
            fillColor: Utils.str2color(objectParam.fillColor),
        }
        super.setObject(objectId, objectType, vertices, mObjectParam, physicsParam);
        let tipsData: GameTipData[] = [
            {
                tipContent: "高度为：" + this._height,
            },
            {
                tipContent: "倾斜角为：" + this._angle,
            }
        ]
        this.setTipData(tipsData);
    }
}


