
import { _decorator, JsonAsset } from "cc";
import { Singleton } from "../../common/Singleton";
import LogManager from "../../utils/LogManager";
import { ResManager, LoadType } from "../ResManager";
import { IPreInit } from "../../common/IPreInit";
import { PhysicsParam } from "../../modules/game/ObjectBase";

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
    physicsParam: PhysicsParam,
}

export interface IOpenMapData {
    mapPath: string,
    objectDatas: any,
}

export interface IMapConfig {
    modeId: number,
    modeName: string,
    modeBg: string
    levelDatas: {
        levelId: number,
        levelPath: string,
        isLock: number,
    }[],
}

export default class MapData extends Singleton {
    private inited: boolean = false;
    private mapDatas: { [mapName: string]: IOpenMapData };
    private mode2MapDatas: { [mode: number]: IMapConfig };

    constructor() {
        super();
    }

    public init(finishCb?: () => void) {
        this.mapDatas = {};
        ResManager.getInstance().loadBundle("map", () => {
            this.inited = true;
            ResManager.getInstance().loadAsset("mapConfig", LoadType.JSON, "map", (json: JsonAsset) => {
                let mapData = json.json as IMapConfig[];
                if (mapData) {
                    this.mode2MapDatas = {};
                    for (let i = 0; i < mapData.length; i++) {
                        const modeItemData = mapData[i];
                        const modeID = modeItemData.modeId;
                        this.mode2MapDatas[modeID] = modeItemData;
                    }
                }
                if (finishCb) {
                    finishCb();
                }
            }, (err) => {
                LogManager.error(err);
            });
        });
    }

    public getModeDatas() {
        if (!this.inited) {
            LogManager.warn("MapManager未初始化");
            return;
        }
        return this.mode2MapDatas;
    }

    public getModeDatasById(modeId: number) {
        if (!this.inited) {
            LogManager.warn("MapManager未初始化");
            return;
        }
        if (this.getModeDatas) {
            return this.mode2MapDatas[modeId];
        }
    }

    public loadMapData(mapName: string, finishCb?: (mapData: IOpenMapData) => void) {
        if (!this.inited) {
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