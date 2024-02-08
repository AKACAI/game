System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, PriorityQueue, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed143FF8vxGmoRA6yW6oFq+", "Stack", undefined);

      _export("default", PriorityQueue = class PriorityQueue {
        /**返回 1：a>b  0：a=b  -1 a<b */
        constructor(compare) {
          this._length = 0;
          this._queue = [];
          this._compare = compare;
        }

        push(val) {
          this._queue.push(val); // 从该节点开始向上找父节点，直到父节点比他小为止


          this.adjustUp(this._queue.length - 1);
          this._length = this._queue.length; // this.print((a)=>{
          //     return a._nextTriggerTime;
          // })
        }

        pop() {
          if (this._length <= 0) {
            return null;
          }

          [this._queue[0], this._queue[this.length - 1]] = [this._queue[this.length - 1], this._queue[0]];

          var result = this._queue.pop();

          this.adjustDown(0);
          this._length = this._queue.length; // this.print((a)=>{
          //     return a._nextTriggerTime;
          // })

          return result;
        }

        top() {
          if (this._length <= 0) {
            return null;
          } //this.print();


          return this._queue[0];
        }

        get length() {
          return this._length;
        }

        get queue() {
          return this._queue;
        }

        isEmpty() {
          return this.length == 0;
        }
        /**
         * 找到第一个满足条件的元素的下标
         * @param equal 当前元素是否为目标的标准
         * @returns 第一个满足条件的元素的下标
         */


        findIndex(equal) {
          if (this._length <= 0) {
            return -1;
          }

          if (equal) {
            var curIndex = 0;

            while (curIndex < this._length) {
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


        find(equal) {
          var index = this.findIndex(equal);

          if (index == -1) {
            return null;
          }

          return this.queue[index];
        } // 怎么打印泛型对象的内容呢？


        print(toString) {
          if (toString) {
            var str = "";
            var curIndex = 0;
            var countCurDepth = 1;

            while (curIndex < this._length) {
              for (var j = 0; j < countCurDepth && curIndex < this._length; j++) {
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
                str += "\u7B2C" + curIndex + "\u9879\uFF1A" + toString(this._queue[curIndex]) + "\t";
                curIndex++;
              }

              str += "\n";
              countCurDepth *= 2;
            } //console.log(str);

          } else {
            var _str = "";
            var _curIndex = 0;
            var _countCurDepth = 1;

            while (_curIndex < this._length) {
              for (var _j = 0; _j < _countCurDepth && _curIndex < this._length; _j++) {
                _str += "\u7B2C" + _curIndex + "\u9879\uFF1A" + this._queue[_curIndex] + "\t";
                _curIndex++;
              }

              _str += "\n";
              _countCurDepth *= 2;
            }

            console.log(_str);
          }
        }

        adjustUp(child) {
          var parent = Math.floor((child - 1) / 2);

          while (child > 0) {
            if (this._compare(this._queue[child], this._queue[parent]) == -1) {
              [this._queue[child], this._queue[parent]] = [this._queue[parent], this._queue[child]];
              child = parent;
              parent = Math.floor((child - 1) / 2);
            } else {
              break;
            }
          }
        }

        adjustDown(parent) {
          var child = parent * 2 + 1;

          while (child < this._queue.length) {
            if (child + 1 < this._queue.length && this._compare(this._queue[child], this._queue[child + 1]) == 1) {
              child++;
            }

            if (this._compare(this._queue[child], this._queue[parent]) == -1) {
              [this._queue[child], this._queue[parent]] = [this._queue[parent], this._queue[child]];
              parent = child;
              child = 2 * parent + 1;
            } else {
              break;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f17285f00334da6abb94b376f68162ab3aa3ca07.js.map