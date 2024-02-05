import { _decorator, Vec2, UITransform } from "cc";
import { GameTipData } from "../../ui/game_tip/GameTipItem";
import { ObjectBase, ObjectParam, PhysicsParam } from "../ObjectBase";
import { ObjectType } from "../ObjectFactory";
import Utils from "../../../utils/Utils";

const { ccclass, property } = _decorator;

@ccclass('SquareObject')
export class SquareObject extends ObjectBase {
    protected _width: number;
    protected _height: number;

    public setObject(objectId: number, objectType: ObjectType, shapeParam: { width: number, height: number }, objectParam: any, physicsParam: PhysicsParam): void {
        this._width = shapeParam.width;
        this._height = shapeParam.height;
        let transformCpt = this.node.getComponent(UITransform);
        if (!transformCpt) {
            transformCpt = this.node.addComponent(UITransform);
        }
        transformCpt.setAnchorPoint(0.5, 0);
        let vertices: Vec2[] = [
            new Vec2(- this._width / 2, 0),
            new Vec2(this._width / 2, 0),
            new Vec2(this._width / 2, this._height),
            new Vec2(- this._width / 2, this._height),
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
                tipContent: "宽度为：" + this._width,
            },
            {
                tipContent: "高度为：" + this._height,
            }
        ]
        this.setTipData(tipsData);
    }
}


