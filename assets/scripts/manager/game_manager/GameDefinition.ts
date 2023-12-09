export class GameDefinition {
    // 每单位长度代表的实际长度
    public static readonly meterPerUnit = 5;
}

export enum Phy_Group {
    "DEFAULT" = 1 << 0,
    "TERRAIN"= 1 << 1,
    "GAMEOBJECT"= 1 << 2,
}