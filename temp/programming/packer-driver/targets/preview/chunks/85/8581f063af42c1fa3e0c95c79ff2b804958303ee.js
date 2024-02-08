System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ITest, test, _crd, ccclass, property;

  _export("test", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb6aecywBZEUZFsyftrZAI3", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      ITest = class ITest {
        constructor() {
          this._init();
        }

        _init() {}

      };

      _export("test", test = class test extends ITest {
        constructor() {
          super(...arguments);
          this.a = 0;
        }

        _init() {
          console.log(this.a);
          this.a = 1;
          console.log(this.a);
        }

        setData() {
          console.log(this.a);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8581f063af42c1fa3e0c95c79ff2b804958303ee.js.map