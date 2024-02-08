System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, NodeHelper, Utils, _dec, _class, _crd, ccclass, property, LevelSelectModeItem;

  function _reportPossibleCrUseOfNodeHelper(extras) {
    _reporterNs.report("NodeHelper", "../../../common/NodeHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      NodeHelper = _unresolved_2.default;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c17d9+wX7JKJLeNxjWhjqk4", "LevelSelectModeItem-001", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Node', 'Prefab', 'Sprite', 'UIOpacity']);

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
          this.maxOpacity = 100;
        }

        init() {
          this.img_mode = this.node.getChildByName("img_mode");
          this.lb_mode_name = this.node.getChildByName("lb_mode_name");
          this.img_state_mask = this.node.getChildByName("img_state_mask");
          this.img_state_mask.active = true;
          this.setProgressOpacity(0);
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

        setProgressOpacity(progress) {
          let opacity = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clamp(progress * this.maxOpacity, 0, this.maxOpacity);
          this.changeMaskOpacity(opacity);
        }

        changeMaskOpacity(opacity) {
          let opacityCpt = this.img_state_mask.getComponent(Sprite);

          if (opacityCpt) {
            let color = opacityCpt.color;
            color.a = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clamp(opacity, 0, 255);
            opacityCpt.color = color;
          }
        }

        dispose() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6271730858d21c69000496c248962390972e91ee.js.map