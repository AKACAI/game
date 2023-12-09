import { Singleton } from "../../common/Singleton";

export class PhysicsController extends Singleton {
    // 重力加速度
    private _gravityFactor: number;
    public init() {
        this.setGravityFactor(10);
    }

    public setGravityFactor(value: number) {
        this._gravityFactor = value;
    }

    public get gravityFactor() {
        return this._gravityFactor;
    }
}