import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MScrollItem')
export class MScrollItem extends Component {
    protected itemData: any;

    public init() {
        
    }

    public setData(itemData: any) {
        this.itemData = itemData;
    }

    /** 释放资源 */
    public dispose() {

    }
}


