import { _decorator, Vec3, Node } from "cc";
import { Singleton } from "../../common/Singleton";
import { GameManager } from "../../manager/game_manager/GameManager";
import { ObjectBase, PhysicsParam } from "./ObjectBase";
import { RightTriangleObject } from "./game_objects/RightTriangleObject";
import { SquareObject } from "./game_objects/SquareObject";
import { IPreInit } from "../../common/IPreInit";

const { ccclass, property } = _decorator;

@ccclass('ObjectFactory')
export class ObjectFactory extends Singleton implements IPreInit {
    private map_root: Node;
    private objects_pre: ObjectBase[];

    public init() {
        this.map_root = GameManager.getInstance().gameRoot.getChildByName("map_root");
        this.objects_pre = [];
        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    public createObject(type: ObjectType, objectId: number,): ObjectBase {
        let newNode = new Node();
        newNode.setParent(this.map_root);
        newNode.active = false;
        let component = newNode.addComponent(objectType2component[type]);
        component.create();
        this.objects_pre.push(component);
        return component;
    }

    public getObject(type: ObjectType, objectId: number, shapeParam: any, pos: Vec3, objectData: any, physicsParam: PhysicsParam, parent?: Node): ObjectBase {
        let object = this.objects_pre.shift();
        if (!object) {
            object = this.createObject(type, objectId);
            object = this.objects_pre.shift();
        }
        object.node.name = objectData.name;
        object.node.setParent(parent ? parent : this.map_root);
        object.node.setPosition(pos);
        object.setObject(objectId, type, shapeParam, objectData, physicsParam);
        object.node.active = true;
        return object;
    }

    public givebackObject(object: ObjectBase) {
        object.node.active = false;
        this.objects_pre.push(object);
    }

    public destroyObject(object: ObjectBase) {
        object.node.destroy();
    }
}

export enum ObjectType {
    Square = 1,
    RightTriangle = 2,

}

const objectType2component = {
    [ObjectType.Square]: SquareObject || ObjectBase,
    [ObjectType.RightTriangle]: RightTriangleObject || ObjectBase,
}
