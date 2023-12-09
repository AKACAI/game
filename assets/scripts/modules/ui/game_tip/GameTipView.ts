import { _decorator, Label, Prefab, UITransform, instantiate, Node } from "cc";
import { ResManager, LoadType } from "../../../manager/ResManager";
import { UILayer } from "../../../manager/ui_manager/UIManager";
import { UIPanel } from "../../../manager/ui_manager/UIPanel";
import { GameTipData, GameTipItem } from "./GameTipItem";

const { ccclass, property } = _decorator;

@ccclass('GameTipView')
export class GameTipView extends UIPanel {
    private tipsData: GameTipData[];

    private lb_name: Label;
    private bg_tip: Node;
    private node_tips: Node;
    private itemPrefab: Prefab;
    private readonly itemCreateCount = 5;

    public init() {
        this._layer = UILayer.game;
        this.bg_tip = this.node.getChildByName("bg_tip");
        this.lb_name = this.node.getChildByName("lb_name").getComponent(Label);
        this.node_tips = this.node.getChildByName("node_tips");
        ResManager.getInstance().loadAsset("game_tip_item", LoadType.PrefableRes, "game_tip", (prefab) => {
            this.itemPrefab = prefab;
            for (let i = 0; i < this.itemCreateCount; i++) {
                this.createTip()
            }
        }, null, this);
    }

    public open() {

    }

    public close() {

    }

    public dispose() {
        this.destroyTips();
    }

    public showTip(name?: string, data?: GameTipData[]) {
        this.node.active = true;
        if (!data || data.length == 0) {
            this.node_tips.active = false;
            return;
        }
        this.node_tips.active = true;
        this.tipsData = data;
        this.lb_name.string = name;
        let node_height = 45;

        let curPosY = 0;
        let maxShowCount = Math.min(data.length, this.node_tips.children.length);
        for (let i = 0; i < maxShowCount; i++) {
            let curTipNode = this.node_tips.children[i];
            let curTipItemCpt = curTipNode.getComponent(GameTipItem);
            if (curTipItemCpt) {
                curTipItemCpt.setData(data[i]);
                curTipNode.setPosition(0, curPosY, 0);
                curTipNode.active = true;
                let item_height = curTipItemCpt.getComponent(UITransform).contentSize.y;
                curPosY -= item_height;
                node_height += item_height;
            }
        }
        for (let i = maxShowCount; i < this.node_tips.children.length; i++) {
            this.node_tips.children[i].active = false;
        }
        let node_width = this.node.getComponent(UITransform).contentSize.x;
        this.node.getComponent(UITransform).setContentSize(node_width, node_height);
        this.bg_tip.getComponent(UITransform).setContentSize(node_width, node_height);
    }

    public hideTips() {
        this.node.active = false;
    }

    private createTip(): Node {
        let node = instantiate(this.itemPrefab);
        let tipItemCpt = node.getComponent(GameTipItem);
        if (tipItemCpt) {
            tipItemCpt.init();
            this.node_tips.addChild(node);
            node.active = false;
            return node;
        }
        return null;
    }

    private destroyTips() {
        for (let i = this.node_tips.children.length - 1; i >= 0; i++) {
            let item = this.node.children[i];
            item.destroy();
        }
    }
}