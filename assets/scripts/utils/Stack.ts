export default class Stack<T extends any> {
    private _stack: T[];

    public constructor() {
        this._stack = [];
    }

    public push(val: T) {
        this._stack.push(val);
    }

    public pop(): T {
        return this._stack.pop();
    }

    public top(): T {
        if (this._stack.length <= 0) {
            return undefined;
        }
        return this._stack[this._stack.length - 1];
    }

    public get length(): number {
        return this._stack.length;
    }

    public isEmpty(): boolean {
        return this.length == 0;
    }

    // 怎么打印泛型对象的内容呢？
    public print(toString: (a: T) => string) {
        if (toString) {
            let str = "";
            let curIndex = 0;
            let countCurDepth = 1;
            while (curIndex < this.length) {
                for (let j = 0; j < countCurDepth && curIndex < this.length; j++) {
                    // let parent = Math.floor((curIndex - 1) / 2);
                    // if (parent >= 0) {
                    //     if (this._compare(this._queue[curIndex], this._queue[parent]) == 1) {
                    //         DebugTool.log(`第${curIndex}项：${toString(this._queue[curIndex])}\t`, Color.GREEN);
                    //     }
                    //     else if (this._compare(this._queue[curIndex], this._queue[parent]) == 0) {
                    //         DebugTool.log(`第${curIndex}项：${toString(this._queue[curIndex])}\t`, Color.YELLOW);
                    //     }
                    //     else {
                    //         DebugTool.log(`第${curIndex}项：${toString(this._queue[curIndex])}\t`, Color.RED);
                    //     }
                    // }
                    // else {
                    //     DebugTool.log(`第${curIndex}项：${toString(this._queue[curIndex])}\t`, Color.BLACK);
                    // }
                    str += `第${curIndex}项：${toString(this._stack[curIndex])}\t`;
                    curIndex++;
                }
                str += "\n";
                countCurDepth *= 2;
            }
            //console.log(str);
        }
        else {
            let str = "";
            let curIndex = 0;
            let countCurDepth = 1;
            while (curIndex < this.length) {
                for (let j = 0; j < countCurDepth && curIndex < this.length; j++) {
                    str += `第${curIndex}项：${this._stack[curIndex]}\t`;
                    curIndex++;
                }
                str += "\n";
                countCurDepth *= 2;
            }
            console.log(str);
        }
    }
}