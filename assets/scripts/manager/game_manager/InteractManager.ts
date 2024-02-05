import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { ObjectBase } from '../../modules/game/ObjectBase';
import { MouseParam } from '../InputManager';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('InteractManager')
export class InteractManager {
    private _gameManager: GameManager = undefined;
    /** 当前鼠标检测到的物体 */
    private _curDetectObjects: ObjectBase[];

    constructor(gameManager: GameManager) {
        this._gameManager = gameManager;
        this._curDetectObjects = [];
    }

    public interactWithObject(object: ObjectBase, mouseParam: MouseParam) {
        let interactSpace = object.getInteractSpace();
        if (interactSpace) {
            const isMouseIn = interactSpace.contains(mouseParam.mousePos);
            let lastDetectIndex = this._curDetectObjects.findIndex((item) => {
                if (object.getObjectInfo().id == item.getObjectInfo().id) {
                    return true;
                }
                return false;
            });
            if (isMouseIn) {
                if (lastDetectIndex >= 0) {

                } else {
                    interactSpace.onMouseEnterSpace(mouseParam);
                    this._curDetectObjects.push(object);
                }
            } else {
                if (lastDetectIndex >= 0) {
                    interactSpace.onMouseLeaveSpace(mouseParam);
                    this._curDetectObjects.splice(lastDetectIndex, 1);
                } else {

                }
            }
        }

    }
}


