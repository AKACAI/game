import { _decorator, Vec3, director, instantiate, Node } from "cc";
import { Singleton } from "../../common/Singleton";
import { ResManager, LoadType } from "../ResManager";
import { ConstStr } from "./Name2Panel";
import { UIPanel, ResDestroyType } from "./UIPanel";
import { IPreInit } from "../../common/IPreInit";
import Stack from "../../utils/Stack";

const { ccclass, property } = _decorator;

export enum UILayer {
    mouse_input = 0,
    game,
    normal,
    alert_no_bg,
    alert,
    screen,
}

interface IOpenable {
    position?: Vec3,
}

@ccclass('UIManager')
export class UIManager extends Singleton implements IPreInit {
    private mainCanvas: Node;
    private layer2node: Map<UILayer, Node>;
    private openingPanel: Map<string, UIPanel>; //  应该配合一个栈
    private normalPanelStack: Stack<UIPanel>;

    public init() {
        this.layer2node = new Map();
        this.openingPanel = new Map();
        this.normalPanelStack = new Stack<UIPanel>();
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
                uIPanel.panelName = panelName;
                uIPanel.bundleName = bundleName;
                uIPanel.init();
                uIPanel.open();
                if (uIPanel.layer == UILayer.normal) {
                    let topPanel = this.normalPanelStack.top();
                    if (topPanel) {
                        topPanel.close();
                    }
                    this.normalPanelStack.push(uIPanel);
                }
                finishCb?.();
            });
        });
    }

    public isOpenPanel(panelName: string): boolean {
        if (!panelName) {
            return false;
        }
        return this.openingPanel.has(panelName);
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
        this.openingPanel.delete(panelName);
        uIPanel.close();

        if (uIPanel.layer == UILayer.normal) {
            this.normalPanelStack.pop();
            let topPanel = this.normalPanelStack.top();
            if (topPanel) {
                topPanel.open();
            }
        }

        if (uIPanel.resDestroyType == ResDestroyType.directlyRelease) {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
        }
        else if (uIPanel.resDestroyType == ResDestroyType.delayRelease) {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
        }
        else {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
        }
    }

    private disposePanel(panel: UIPanel) {
        panel.dispose();
        let panelName = panel.panelName;
        let panelPath = ConstStr.PanelPath[panelName];
        let bundleName = panelPath.split("/")[0];
        ResManager.getInstance().releaseBundle(bundleName); //这个有问题
    }
}


