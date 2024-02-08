System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeHelper, _dec, _class, _crd, ccclass, property, LevelSelectModeItem;

  function _reportPossibleCrUseOfNodeHelper(extras) {
    _reporterNs.report("NodeHelper", "../../../common/NodeHelper", _context.meta, extras);
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
      NodeHelper = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd547y31npA/5SC4qBgFB7W", "LevelSelectModeItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelSelectModeItem", LevelSelectModeItem = (_dec = ccclass('LevelSelectModeItem'), _dec(_class = class LevelSelectModeItem extends Component {
        constructor(...args) {
          super(...args);
          this.img_mode = undefined;
          this.lb_mode_name = undefined;
          this.img_state_mask = undefined;
          this.data = undefined;
          this.isSelected = undefined;
        }

        init() {
          this.img_mode = this.node.getChildByName("img_mode");
          this.lb_mode_name = this.node.getChildByName("lb_mode_name");
          this.img_state_mask = this.node.getChildByName("img_state_mask");
          this.img_state_mask.active = false;
          this.addListener();
        }

        addListener() {
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.node, () => {
            if (this.data && this.data.clickCb) {
              this.data.clickCb();
            }
          }, this, undefined, false);
        }

        setData(data) {
          this.data = data;
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setLabelString(this.lb_mode_name, data.name);
        }

        changeSelectState(isSelected) {
          this.isSelected = isSelected;

          if (isSelected) {
            this.img_state_mask.active = false;
          } else {
            this.img_state_mask.active = true;
          }
        }

        dispose() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84d21d52b21668f9abea8be907214cbd2d18b385.js.map