import { Button, Label, Node, Size, Sprite, UIOpacity, UITransform } from "cc";
import { ButtonEventType, ComButton } from "../manager/ui_manager/component/ComButton";
import { Display } from "./Display";
// declare function require(path: string): any;

// 客户端布局等管理
export default class NodeHelper {
    static setPosX(node: Node, posX: number) {
        node.setPosition(posX, node.position.y, node.position.z);
    }

    static setPosY(node: Node, posY: number) {
        node.setPosition(node.position.x, posY, node.position.z);
    }

    static setPosZ(node: Node, posZ: number) {
        node.setPosition(node.position.x, node.position.y, posZ);
    }

    static setScaleX(node: Node, scaleX: number) {
        node.setScale(scaleX, node.scale.y, node.scale.z);
    }

    static setScaleY(node: Node, scaleY: number) {
        node.setScale(node.scale.x, scaleY, node.scale.z);
    }

    static setScaleZ(node: Node, scaleZ: number) {
        node.setScale(node.scale.x, node.scale.y, scaleZ);
    }

    static setAnchorPoint(node: Node, x: number, y: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(x, y);
    }

    static setAnchorPointX(node: Node, x: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(x, node.getComponent(UITransform).anchorY);
    }

    static setAnchorPointY(node: Node, y: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(node.getComponent(UITransform).anchorX, y);
    }

    static setContentSize(node: Node, width: number, height: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(width, height);
    }

    /**获取对应节点的uiTransform的size 如果没有，返回一个全新的size 0 ,0 */
    static getContentSize(node: Node): Size {
        if (node.getComponent(UITransform)) {
            return node.getComponent(UITransform).contentSize;
        } else {
            return new Size(0, 0);
        }

    }

    static setContentWidth(node: Node, width: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(width, node.getComponent(UITransform).height);
    }

    static setContentHeight(node: Node, height: number) {
        node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(node.getComponent(UITransform).width, height);
    }

    static setOpacity(node: Node, opacity: number) {
        let comp = node.getComponent(UIOpacity)
        if (!comp) {
            comp = node.addComponent(UIOpacity)
        }
        comp.opacity = opacity;
    }

    // 创建新节点
    static newNode(name?: string): Node {
        let node = new Node(name);
        node.addComponent(UITransform);
        node.addComponent(UIOpacity);
        return node;
    }

    // 创建新的带有Button组件的节点
    static newButton(): Node {
        let node: Node = new Node();
        node.addComponent(Button);
        node.addComponent(UITransform);
        node.addComponent(UIOpacity);
        return node;
    }

    // /**
    //  * 设置已经加载的spriteFrame（使用时要确认资源已经加载）
    //  * @param node 显示对象 或组件
    //  * @param path 要设置的资源
    //  * 
    //  */
    // static loadAndSetImage(node: Node | Sprite, path: string, bundleName: string): void {
    //     if (!node || !path) {
    //         return;
    //     }
    //     ResManager.getInstance().loadAsset(path, LoadType.Texture, bundleName, (asset) => {
    //         if (node instanceof Sprite) {
    //             node.spriteFrame = asset;
    //         } else if (node instanceof Node) {
    //             let s = node.getComponent(Sprite);
    //             if (s) {
    //                 s.spriteFrame = asset;
    //             } else {
    //                 s = node.addComponent(Sprite);
    //                 s.spriteFrame = asset;
    //             }
    //         }
    //     }, () => {
    //         console.warn("!!!setSpriteFrame!!!:", path);
    //     })
    // }

    /**
     * 
     * @param click_widget 点击的对象
     * @param click_func 触发的函数
     * @param target 目标（触发的函数回调的调用者）
     * @param extParams  额外参数
     */
    static setNodeClickEvent(click_node: Node, click_func: Function, target: any, extParams?: any, clickAnim?: boolean) {
        if (!click_node || !click_func) {
            return;
        }
        let btnCpt = click_node.getComponent(ComButton);
        if (!btnCpt) {
            btnCpt = click_node.addComponent(ComButton);
        }
        btnCpt.init(clickAnim, true);
        btnCpt.addEvent({
            type: ButtonEventType.click,
            func: click_func,
            target: target,
            params: extParams,
        })
    }

    /**将节点布满整个屏幕 */
    static setNodeSizeFullScreen(node: Node) {
        if (!node) {
            return;
        }
        let uiTransform: UITransform = node.getComponent(UITransform);
        if (!uiTransform) {
            return;
        }
        let windowSize = Display.getInstance().getWindowSize();
        uiTransform.setContentSize(windowSize.x, windowSize.y);
    }

    /**设置文本节点的文本 */
    static setLabelString(node: Node, str: string | number) {
        if(!node) {
            return;
        }
        let labelCpt: Label = node.getComponent(Label);
        if (labelCpt) {
            labelCpt.string = str.toString();
        }
    }
}
