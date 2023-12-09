System.register(["__unresolved_0", "cc", "m_scroll_view/MScrollView"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MScrollView, _dec, _class, _crd, ccclass, property, GameToolsView;

  function _reportPossibleCrUseOfMScrollView(extras) {
    _reporterNs.report("MScrollView", "m_scroll_view/MScrollView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_m_scroll_viewMScrollView) {
      MScrollView = _m_scroll_viewMScrollView.MScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10c53LqwopHxZOHyHO1c4Dp", "GameToolsView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameToolsView", GameToolsView = (_dec = ccclass('GameToolsView'), _dec(_class = class GameToolsView extends (_crd && MScrollView === void 0 ? (_reportPossibleCrUseOfMScrollView({
        error: Error()
      }), MScrollView) : MScrollView) {
        setData(itemsData) {
          super.setData(itemsData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e02b75eaef9349a82284dfd20053904e0d75a136.js.map