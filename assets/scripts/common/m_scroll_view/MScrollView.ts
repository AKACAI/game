import { MScrollItem } from './MScrollItem';
import { _decorator, CCInteger, Component, Enum, EventMouse, instantiate, Mask, Node, Prefab, UITransform, Vec2 } from 'cc';
const { ccclass, property, requireComponent } = _decorator;

export enum ScrollLayoutType {
    Horizon = 1,
    Verticle = 2,
}

export enum ScrollOrderType {
    Forward = 1,    // 正向排序（从前往后
    Reverse = 2,    // 逆向排序（从后往前
}

@ccclass('MScrollView')
@requireComponent(Mask)
export class MScrollView extends Component {
    @property({ type: Prefab, tooltip: "用于生成可展示内容的预制体引用" })
    protected itemPrefab: Prefab;
    @property({ type: Enum(ScrollLayoutType), tooltip: "布局类型" })
    protected layoutType: ScrollLayoutType = ScrollLayoutType.Verticle;
    @property({ type: Enum(ScrollLayoutType), tooltip: "排序类型" })
    protected orderType: ScrollOrderType = ScrollOrderType.Forward;
    @property({ type: [CCInteger], tooltip: "item之间的间距" })
    protected spacing: number = 0;
    @property({ type: [CCInteger], tooltip: "与起始位置的间距" })
    protected beginSpacing: number = 0;
    @property({ type: [CCInteger], tooltip: "与终止位置的间距" })
    protected endSpacing: number = 0;

    protected scrollItems: MScrollItem[];   // 实例化的item
    protected itemsData: any[];             // item的数据

    protected allItemNum: number;           // 所有的item的总数
    protected allProgressLength: number;    // 所有的进度的长度
    protected leftBorder: number;           // 进度为0时的坐标值，也就是左边界
    protected rightBorder: number;          // 进度为1时的坐标值，也就是右边界
    protected curProgressPos: number;        // 当前的进度坐标
    protected viewLength: number;           // 可视区域长度
    protected itemLength: number;           // item的长度
    protected canScroll: boolean;

    protected contentNode: Node;      // 实例化的item的父节点

    public init() {
        if (!this.itemPrefab) {
            console.error("请给滚动容器", this.node.name, "绑定item预制体！！！")
            return;
        }
        this.canScroll = false;
        this.contentNode = new Node("content");
        this.contentNode.parent = this.node;
        this.contentNode.setPosition(0, 0, 0);
        let transform = this.contentNode.addComponent(UITransform);
        let nodeTransform = this.node.getComponent(UITransform);
        transform.setAnchorPoint(nodeTransform.anchorPoint);
        transform.setContentSize(nodeTransform.contentSize);
        if (this.layoutType == ScrollLayoutType.Horizon) {
            let item = instantiate(this.itemPrefab);
            this.itemLength = item.getComponent(UITransform).contentSize.x;
            this.viewLength = transform.contentSize.x;
            item.destroy();
        }
        else {
            let item = instantiate(this.itemPrefab);
            this.itemLength = item.getComponent(UITransform).contentSize.y;
            this.viewLength = transform.contentSize.y;
            item.destroy();
        }
        let count = Math.ceil((this.viewLength + this.spacing) / (this.spacing + this.itemLength));
        this.scrollItems = [];
        for (let i = 0; i < count; i++) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.contentNode;
            node.active = false;
            let scrollItem = node.getComponent(MScrollItem);
            scrollItem.init();
            this.scrollItems.push(scrollItem);
        }

        this.initFunc();
    }

    protected initFunc() {
        this.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
    }

    public setData(itemsData: any[], canScroll: boolean) {
        if (!this.itemPrefab) {
            console.error("请给滚动容器", this.node.name, "绑定item预制体！！！")
            return;
        }
        this.canScroll = canScroll;
        this.itemsData = itemsData;
        this.allItemNum = this.itemsData.length;
        this.allProgressLength = this.beginSpacing + this.endSpacing + this.itemLength + (this.allItemNum - 1) * (this.itemLength + this.spacing);
        this.leftBorder = 0;
        this.rightBorder = this.allProgressLength - this.viewLength;
        if (this.itemsData.length >= this.scrollItems.length) {
            this.curProgressPos = 0;
            this.updateProgress(0);
        }
        else {
            this.curProgressPos = 0;
            if (this.layoutType == ScrollLayoutType.Horizon) {
                if (this.orderType == ScrollOrderType.Forward) {
                    for (let i = 0; i < this.itemsData.length; i++) {
                        this.scrollItems[i].node.active = true;
                        this.scrollItems[i].node.setPosition(i * (this.itemLength + this.spacing) + this.itemLength / 2, 0, 0);
                        this.scrollItems[i].setData(this.itemsData[i]);
                    }
                }
                // else if (this.orderType == ScrollOrderType.Reverse) {
                //     for (let i = 0; i < this.itemsData.length; i++) {
                //         this.scrollItems[i].node.active = true;
                //         this.scrollItems[i].node.setPosition(i * (this.itemLength + this.spacing) + this.itemLength / 2, 0, 0);
                //         this.scrollItems[i].setData(this.itemsData[i]);
                //     }
                // }
            }
            else if (this.layoutType == ScrollLayoutType.Verticle) {
                if (this.orderType == ScrollOrderType.Forward) {
                    for (let i = 0; i < this.itemsData.length; i++) {
                        this.scrollItems[i].node.active = true;
                        this.scrollItems[i].node.setPosition(0, -i * (this.itemLength + this.spacing) + this.itemLength / 2, 0);
                        this.scrollItems[i].setData(this.itemsData[i]);
                    }
                }
            }
        }
    }

    getItemPos(index: number): number {
        if (index == 0) {
            if (this.layoutType == ScrollLayoutType.Verticle && this.orderType == ScrollOrderType.Forward) {
                return - this.beginSpacing - this.itemLength / 2;
            }
            else if (this.layoutType == ScrollLayoutType.Horizon && this.orderType == ScrollOrderType.Forward) {
                return this.beginSpacing + this.itemLength / 2;
            }
        }
        else {
            if (this.layoutType == ScrollLayoutType.Verticle && this.orderType == ScrollOrderType.Forward) {
                return this.getItemPos(index - 1) - this.itemLength - this.spacing;
            }
            else if (this.layoutType == ScrollLayoutType.Horizon && this.orderType == ScrollOrderType.Forward) {
                return this.getItemPos(index - 1) + this.itemLength + this.spacing;
            }
        }
    }

    protected updateProgress(deltaPos: number) {
        this.curProgressPos += deltaPos;
        if (this.curProgressPos > this.rightBorder) {
            this.curProgressPos = this.rightBorder;
        }
        if (this.curProgressPos < this.leftBorder) {
            this.curProgressPos = this.leftBorder;
        }
        let firstIndex = 0;
        let curItemPos = this.getItemPos(0);
        while (curItemPos + this.itemLength / 2 < this.curProgressPos) {
            firstIndex++;
            curItemPos += this.spacing + this.itemLength;
        }
        let firstPosX = curItemPos - this.curProgressPos;       // 第一个在视窗里面的item的横坐标
        let showCount = Math.min(this.itemsData.length - firstIndex, this.scrollItems.length);
        if (this.layoutType == ScrollLayoutType.Horizon) {
            for (let i = 0; i < showCount; i++) {
                this.scrollItems[i].node.active = true;
                this.scrollItems[i].node.setPosition(firstPosX + i * (this.itemLength + this.spacing), 0, 0);
                this.scrollItems[i].setData(this.itemsData[firstIndex + i]);
            }
        }
        else if (this.layoutType == ScrollLayoutType.Verticle) {
            for (let i = 0; i < showCount; i++) {
                this.scrollItems[i].node.active = true;
                this.scrollItems[i].node.setPosition(0, firstPosX + i * (this.itemLength + this.spacing), 0);
                this.scrollItems[i].setData(this.itemsData[firstIndex + i]);
            }
        }
    }

    protected onMouseWheel(event: EventMouse) {
        if (!this.canScroll) {
            return;
        }
        if (event.getScrollY() > 0) {
            this.updateProgress(-30);
        }
        else if (event.getScrollY() < 0) {
            this.updateProgress(30);
        }
    }

    public dispose() {
        this.node.off(Node.EventType.MOUSE_WHEEL);
        for (let i = 0; i < this.scrollItems.length; i++) {
            this.scrollItems[i].dispose();
        }
        delete this.scrollItems;
    }
}

