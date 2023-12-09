
import { _decorator, JsonAsset } from "cc";
import { Singleton } from "../../common/Singleton";
import LogManager from "../../utils/LogManager";
import { ResManager, LoadType } from "../ResManager";
import { IPreInit } from "../../common/IPreInit";

const { ccclass, property } = _decorator;

export interface IOpenObjectData {
    objectId: number,
    name: string,
    pos: string,
    rot: string,
    sca: string,
    objectType: number,
    shapeParam: any,
    objectParam: any,
}

export interface IOpenMapData {
    mapId: number,
    objectDatas: any,
}

export default class MapData extends Singleton {
    private inited: boolean = false;
    private mapDatas: { [mapName: string]: IOpenMapData };

    constructor() {
        super();
    }

    public init(finishCb?: () => void) {
        this.mapDatas = {};
        ResManager.getInstance().loadBundle("map", () => {
            this.inited = true;
            if (finishCb) {
                finishCb();
            }
        });
    }

    public loadMapData(mapName: string, finishCb?: (mapData: IOpenMapData) => void) {
        if (!this.init) {
            LogManager.warn("MapManager未初始化");
            return;
        }
        if (this.mapDatas[mapName]) {
            let mapData = this.mapDatas[mapName];
            finishCb?.(mapData);
        }
        else {
            ResManager.getInstance().loadAsset(mapName, LoadType.JSON, "map", (json: JsonAsset) => {
                let mapData = json.json as IOpenMapData;
                this.mapDatas[mapName] = mapData;
                finishCb?.(mapData);
            }, (err) => {
                LogManager.error(err);
            });
        }
    }
}