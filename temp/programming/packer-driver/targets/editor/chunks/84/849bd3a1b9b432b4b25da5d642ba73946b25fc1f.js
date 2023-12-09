System.register(["__unresolved_0", "cc", "m_scroll_view/MScrollItem"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, MScrollItem, _dec, _class, _crd, ccclass, property, GameToolsItem;

  function _reportPossibleCrUseOfMScrollItem(extras) {
    _reporterNs.report("MScrollItem", "m_scroll_view/MScrollItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_m_scroll_viewMScrollItem) {
      MScrollItem = _m_scroll_viewMScrollItem.MScrollItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca8591FKiBFS79R1rpVjCsm", "GameToolsItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameToolsItem", GameToolsItem = (_dec = ccclass('GameToolsItem'), _dec(_class = class GameToolsItem extends (_crd && MScrollItem === void 0 ? (_reportPossibleCrUseOfMScrollItem({
        error: Error()
      }), MScrollItem) : MScrollItem) {
        init() {
          this.lb_num = this.node.getChildByName("lb_num");
        }

        setData(data) {
          this.itemData = data;
          this.lb_num.getComponent(Label).string = this.itemData.num;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=849bd3a1b9b432b4b25da5d642ba73946b25fc1f.js.map