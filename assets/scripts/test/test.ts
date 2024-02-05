import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class ITest {
    constructor() {
        this._init();
    }

    protected _init() {

    }
}

export class test extends ITest {
    private a = 0;
    _init(): void {
        console.log(this.a);
        this.a = 1;
        console.log(this.a);
    }

    setData() {
        console.log(this.a);
    }
}


