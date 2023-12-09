export default class PriorityQueue<T extends any> {
    private _length: number;
    private _queue: T[];

    /**返回 1：a>b  0：a=b  -1 a<b */
    private _compare :(a: T, b: T) => number;

    public constructor(compare: (a: T, b: T) => number) {
        this._length = 0;
        this._queue = [];
        this._compare = compare;
    }

    public push(val: T) {
        this._queue.push(val);
        // 从该节点开始向上找父节点，直到父节点比他小为止
        this.adjustUp(this._queue.length - 1);
        this._length = this._queue.length;
        // this.print((a)=>{
        //     return a._nextTriggerTime;
        // })
    }

    public pop(): T {
        if (this._length <= 0) {
            return null;
        }
        [this._queue[0], this._queue[this.length - 1]] = [this._queue[this.length - 1], this._queue[0]];
        let result = this._queue.pop();
        this.adjustDown(0);
        this._length = this._queue.length;
        // this.print((a)=>{
        //     return a._nextTriggerTime;
        // })
        return result;
    }

    public top(): T {
        if (this._length <= 0) {
            return null;
        }
        //this.print();
        return this._queue[0];
    }

    public get length(): number {
        return this._length;
    }

    public get queue(): T[] {
        return this._queue;
    }

    public isEmpty(): boolean {
        return this.length == 0;
    }

    /**
     * 找到第一个满足条件的元素的下标
     * @param equal 当前元素是否为目标的标准
     * @returns 第一个满足条件的元素的下标
     */
    public findIndex(equal: (obj: T) => boolean): number {
        if (this._length <= 0) {
            return -1;
        }
        if (equal) {
            let curIndex = 0;
            while(curIndex < this._length) {
                if (equal(this._queue[curIndex])) {
                    return curIndex;
                }              
                curIndex++;
            }
            return -1;
        }
        return -1;
    }

    /**
     * 找到第一个满足条件的元素
     * @param equal 当前元素是否为目标的标准
     * @returns 第一个满足条件的元素
     */
    public find(equal: (obj: T) => boolean): T {
        let index = this.findIndex(equal);
        if (index == -1) {
            return null;
        }
        return this.queue[index];
    }

    // 怎么打印泛型对象的内容呢？
    public print(toString: (a: T) => string) {
        if (toString) {
            let str = "";
            let curIndex = 0;
            let countCurDepth = 1;
            while(curIndex < this._length) {
                for (let j = 0; j < countCurDepth && curIndex < this._length; j++) {
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
                    str += `第${curIndex}项：${toString(this._queue[curIndex])}\t`;    
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
            while(curIndex < this._length) {
                for (let j = 0; j < countCurDepth && curIndex < this._length; j++) {
                    str += `第${curIndex}项：${this._queue[curIndex]}\t`;    
                    curIndex++;
                }
                str += "\n";
                countCurDepth *= 2;
            }
            console.log(str);
        }
    }

    private adjustUp(child: number) {
        let parent = Math.floor((child - 1) / 2);
        while (child > 0) {
            if (this._compare(this._queue[child], this._queue[parent]) == -1) {
                [this._queue[child], this._queue[parent]] = [this._queue[parent], this._queue[child]];
                child = parent;
                parent = Math.floor((child - 1) / 2);
            }
            else {
                break;
            }
        }
    }

    private adjustDown(parent: number) {
        let child = parent * 2 + 1;
        while (child < this._queue.length) {
            if (child + 1 < this._queue.length && this._compare(this._queue[child], this._queue[child + 1]) == 1) {
                child++;
            }
            if (this._compare(this._queue[child], this._queue[parent]) == -1) {
                [this._queue[child], this._queue[parent]] = [this._queue[parent], this._queue[child]];
                parent = child;
                child = 2 * parent + 1;
            }
            else {
                break;
            }
        }
    }
}