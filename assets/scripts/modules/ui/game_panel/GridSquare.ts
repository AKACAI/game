import { _decorator, Component, Node, Tween, tween, UITransform, v2, Vec2, Vec3 } from 'cc';
import Utils from '../../../utils/Utils';
const { ccclass, property } = _decorator;


@ccclass('GridSquare')
export class GridSquare extends Component {
    private readonly gridOriginSize: { x: number, y: number } = { x: 64, y: 64 };
    private readonly maxScale: number = 3;
    private readonly minScale: number = 0.5;
    private readonly zoomSpeed: number = 0.1;
    private readonly moveSpeedRate: number = 0.4;

    private _curScale: number;
    private _tweenAnim: Tween<Node>;

    public init() {
        this.reset();
        this.initFunc();
    }

    private initFunc() {
        //EventManager.getInstance().addListener(EventStr.StartZoomInGrid, this.onZoomInGrid);
        //EventManager.getInstance().addListener(EventStr.StartZoomOutGrid, this.onZoomInGrid);
        //EventManager.getInstance().addListener(EventStr.EndZoomInGrid, this.onZoomInGrid);
        //EventManager.getInstance().addListener(EventStr.EndZoomOutGrid, this.onZoomInGrid);
    }

    public zoomIn() {
        let targetScale = Utils.clamp(this._curScale + this.zoomSpeed, this.minScale, this.maxScale);
        let targetPosX = this.node.getPosition().x * targetScale / this._curScale;
        let targetPosY = this.node.getPosition().y * targetScale / this._curScale;
        this._curScale = targetScale;

        this._tweenAnim?.stop();
        this._tweenAnim = tween(this.node)
            .to(0.2, { scale: new Vec3(targetScale, targetScale, 1), position: new Vec3(targetPosX, targetPosY, 0) });
        this._tweenAnim.start();
    }

    public zoomOut() {
        let targetScale = Utils.clamp(this._curScale - this.zoomSpeed, this.minScale, this.maxScale);
        let targetPosX = this.node.getPosition().x * targetScale / this._curScale;
        let targetPosY = this.node.getPosition().y * targetScale / this._curScale;
        this._curScale = targetScale;

        this._tweenAnim?.stop();
        this._tweenAnim = tween(this.node)
            .to(0.2, { scale: new Vec3(targetScale, targetScale, 1), position: new Vec3(targetPosX, targetPosY, 0) });
        this._tweenAnim.start();
    }

    public move(deltaPos: Vec2) {
        let targetPosX = this.node.getPosition().x + deltaPos.x * this.moveSpeedRate;
        let targetPosY = this.node.getPosition().y + deltaPos.y * this.moveSpeedRate;
        while (targetPosX > this.gridOriginSize.x * this._curScale) {
            targetPosX -= this.gridOriginSize.x * this._curScale;
        }
        while (targetPosX < -this.gridOriginSize.x * this._curScale) {
            targetPosX += this.gridOriginSize.x * this._curScale;
        }
        while (targetPosY > this.gridOriginSize.y * this._curScale) {
            targetPosY -= this.gridOriginSize.y * this._curScale;
        }
        while (targetPosY < -this.gridOriginSize.y * this._curScale) {
            targetPosY += this.gridOriginSize.y * this._curScale;
        }
        this.node.setPosition(targetPosX, targetPosY, 0);
    }

    private reset() {
        this._curScale = 1;
        this.node.setPosition(0, 0, 0);
        this.node.setScale(1, 1, 1);
    }
}


