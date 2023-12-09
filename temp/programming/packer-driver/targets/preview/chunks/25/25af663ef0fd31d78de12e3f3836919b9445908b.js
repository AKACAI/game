System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, UITransform, _dec, _class, _crd, ccclass, property, GameTipItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f74a8oqUodHxKS80lA8LZMs", "GameTipItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameTipItem", GameTipItem = (_dec = ccclass('GameTipItem'), _dec(_class = class GameTipItem extends Component {
        init() {
          this.lb_desc = this.node.getChildByName("lb_desc").getComponent(Label);
        }

        setData(data) {
          if (!data) {
            return;
          }

          this.data = data;
          this.lb_desc.string = "△" + this.data.tipContent;
          this.lb_desc.updateRenderData(true);
          var node_width = this.node.getComponent(UITransform).contentSize.x;
          var lb_height = this.lb_desc.getComponent(UITransform).contentSize.y;
          this.node.getComponent(UITransform).setContentSize(node_width, lb_height);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25af663ef0fd31d78de12e3f3836919b9445908b.js.map