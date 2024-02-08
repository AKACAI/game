System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Stack, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed143FF8vxGmoRA6yW6oFq+", "Stack", undefined);

      _export("default", Stack = class Stack {
        constructor() {
          this._stack = [];
        }

        push(val) {
          this._stack.push(val);
        }

        pop() {
          return this._stack.pop();
        }

        top() {
          if (this._stack.length <= 0) {
            return undefined;
          }

          return this._stack[this._stack.length - 1];
        }

        get length() {
          return this._stack.length;
        }

        isEmpty() {
          return this.length == 0;
        } // 怎么打印泛型对象的内容呢？


        print(toString) {
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
            } //console.log(str);

          } else {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f812729393cf048fe379146bbec5b1757792a252.js.map