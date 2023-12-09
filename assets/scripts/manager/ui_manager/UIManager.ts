import { _decorator, Vec3, director, instantiate, Node } from "cc";
import { Singleton } from "../../common/Singleton";
import { ResManager, LoadType } from "../ResManager";
import { ConstStr } from "./Name2Panel";
import { UIPanel, ResDestroyType } from "./UIPanel";
import { IPreInit } from "../../common/IPreInit";

const { ccclass, property } = _decorator;

export enum UILayer {
    mouse_input = 0,
    game,
    menu,
    screen,
    alert,
}

interface IOpenable {
    position?: Vec3,
}

@ccclass('UIManager')
export class UIManager extends Singleton implements IPreInit {
    private mainCanvas: Node;
    private layer2node: Map<UILayer, Node>;
    private openingPanel: Map<string, UIPanel>;
    public init() {
        this.layer2node = new Map();
        this.openingPanel = new Map();
        this.mainCanvas = director.getScene().getChildByName("main_canvas");

        let node_game_view = this.mainCanvas.getChildByName("node_ui_view");
        node_game_view.children.forEach((node, index) => {
            this.layer2node.set(index, node);
        });

        if (this.nextInitManager) {
            this.nextInitManager.init();
        }
        console.log("UIManager初始化完成!");
    }

    public nextInitManager: IPreInit;
    public setNextInitManager(nextInitManager: IPreInit): void {
        this.nextInitManager = nextInitManager;
    }
    public getLayerNode(layer: UILayer): Node {
        return this.layer2node.get(layer);
    }

    public openPanel(panelName: string, finishCb?: () => void, params?: IOpenable) {
        if (!panelName) {
            return;
        }
        if (this.openingPanel.has(panelName)) {
            return;
        }
        let panelPath = ConstStr.PanelPath[panelName];
        let bundleName = panelPath.split("/")[0];
        let panelPrefabPath = panelPath.split("/")[1];
        ResManager.getInstance().loadBundle(bundleName, () => {
            ResManager.getInstance().loadAsset(panelPrefabPath, LoadType.PrefableRes, bundleName, (prefab) => {
                console.log("成功打开Panel：", panelName);
                let node = instantiate(prefab);
                let uIPanel: UIPanel = node.getComponent(UIPanel);
                node.parent = this.getLayerNode(uIPanel.layer);
                node.setPosition(0, 0, 0);
                this.openingPanel.set(panelName, uIPanel);
                uIPanel.init();
                uIPanel.bindFunc();
                uIPanel.open();
                finishCb?.();
            });
        });
    }

    public getPanel(panelName: string): UIPanel {
        if (!panelName) {
            return null;
        }
        if (!this.openingPanel.has(panelName)) {
            return null;
        }
        let uIPanel = this.openingPanel.get(panelName);
        return uIPanel;
    }

    public closePanel(panelName: string) {
        if (!panelName) {
            return;
        }
        if (!this.openingPanel.has(panelName)) {
            return;
        }
        let uIPanel = this.openingPanel.get(panelName);
        let node = uIPanel.node;
        uIPanel.disbindFunc();
        uIPanel.close();

        if (uIPanel.resDestroyType == ResDestroyType.directlyRelease) {
            let panelPath = ConstStr.PanelPath[panelName];
            let bundleName = panelPath.split("/")[0];
            ResManager.getInstance().releaseBundle(bundleName);
        }
        else if (uIPanel.resDestroyType == ResDestroyType.delayRelease) {

        }
        else {

        }
    }
}


