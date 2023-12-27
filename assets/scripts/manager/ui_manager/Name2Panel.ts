import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export const PanelName = {
    MainMenu: "MainMenu",
    GamePanel: "GamePanel",
    GameTip: "GameTip",
    GameStartMenuView: "GameStartMenuView",
}

/** 既作为预制体的路径，也作为key */
export class ConstStr{
    static readonly PanelPath: {[key: string]: string} = {
        [PanelName.MainMenu]: "main_menu/main_menu",
        [PanelName.GamePanel]: "game_panel/game_panel",
        [PanelName.GameTip]: "game_tip/game_tip_view",
        [PanelName.GameStartMenuView]: "game_start_menu/game_start_menu_view",
    }
} 
