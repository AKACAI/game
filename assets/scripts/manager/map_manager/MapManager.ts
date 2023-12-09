import { _decorator, Node } from "cc";
import { Singleton } from "../../common/Singleton";
import { ObjectFactory } from "../../modules/game/ObjectFactory";
import Utils from "../../utils/Utils";
import { GameManager } from "../game_manager/GameManager";
import MapData, { IOpenObjectData } from "./MapData";
import { IPreInit } from "../../common/IPreInit";
import EventManager from "../event_manager/EventManager";
import { EventConstants } from "../event_manager/EventConstants";

const { ccclass, property } = _decorator;

@ccclass('MapManager')
export class MapManager extends Singleton implements IPreInit {
    private map_root: Node;
    private gameMgr: GameManager;
    public init() {
        this.gameMgr = GameManager.getInstance();
        this.map_root = this.gameMgr.gameRoot.getChildByName("map_root");
        MapData.getInstance().init(() => {
            if (this.nextInitManager) {
                this.nextInitManager.init();
            } else {
                EventManager.dispatchEvent(EventConstants.GameControl.GameStart);
            }
        });
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }

    public enterMap(mapName: string) {
        MapData.getInstance().loadMapData(mapName, (mapData) => {
            for (let i = 0; i < mapData.objectDatas.length; i++) {
                let data = mapData.objectDatas[i] as IOpenObjectData;
                let object = ObjectFactory.getInstance().getObject(data.objectType, data.shapeParam, Utils.str2vec3(data.pos), data.objectParam, this.map_root);
                this.gameMgr.addObject(object);
            }
        });
    }
}


