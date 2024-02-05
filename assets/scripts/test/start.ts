import { _decorator, Component, Node } from 'cc';
import { test } from './test';
const { ccclass, property } = _decorator;

@ccclass('start')
export class start extends Component {
    start() {
        let test1 = new test();
        test1.setData();
    }
}


