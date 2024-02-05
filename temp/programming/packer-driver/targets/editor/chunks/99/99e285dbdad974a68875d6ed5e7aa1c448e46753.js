System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, MScrollItem, _dec, _class, _crd, ccclass, property, GameToolsItem;

  function _reportPossibleCrUseOfMScrollItem(extras) {
    _reporterNs.report("MScrollItem", "../../../common/m_scroll_view/MScrollItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MScrollItem = _unresolved_2.MScrollItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca8591FKiBFS79R1rpVjCsm", "GameToolsItem", undefined);

      __checkObsolete__(['Label', 'Node', '_decorator']);

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
//# sourceMappingURL=99e285dbdad974a68875d6ed5e7aa1c448e46753.js.map