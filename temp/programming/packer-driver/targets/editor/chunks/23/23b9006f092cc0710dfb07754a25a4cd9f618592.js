System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, test, _dec, _class, _crd, ccclass, property, start;

  function _reportPossibleCrUseOftest(extras) {
    _reporterNs.report("test", "./test", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      test = _unresolved_2.test;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca979vvSlFLl6hy+onKmUGh", "start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("start", start = (_dec = ccclass('start'), _dec(_class = class start extends Component {
        start() {
          let test1 = new (_crd && test === void 0 ? (_reportPossibleCrUseOftest({
            error: Error()
          }), test) : test)();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23b9006f092cc0710dfb07754a25a4cd9f618592.js.map