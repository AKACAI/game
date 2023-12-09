import { _decorator, Vec2 } from "cc";
import { GameTipData } from "../../ui/game_tip/GameTipItem";
import { ObjectBase, ObjectParam } from "../ObjectBase";
import { ObjectType } from "../ObjectFactory";

const { ccclass, property } = _decorator;

@ccclass('SquareObject')
export class SquareObject extends ObjectBase {
    protected _width: number;
    protected _height: number;

    public init(objectType: ObjectType, shapeParam: {width: number, height: number}, objectParam: ObjectParam): void {
        this._width = shapeParam.width;
        this._height = shapeParam.height;
        let vertices: Vec2[] = [
            new Vec2(- this._width / 2, - this._height / 2),
            new Vec2(this._width / 2, - this._height / 2),
            new Vec2(this._width / 2, this._height / 2),
            new Vec2(- this._width / 2, this._height / 2),
        ]
        super.init(objectType, vertices, objectParam);
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


