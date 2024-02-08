System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, NodeHelper, Utils, _dec, _class, _crd, ccclass, property, LevelItem;

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

      _cclegacy._RF.push({}, "c17d9+wX7JKJLeNxjWhjqk4", "LevelItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Node', 'Prefab', 'Sprite', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelItem", LevelItem = (_dec = ccclass('LevelItem'), _dec(_class = class LevelItem extends Component {
        constructor(...args) {
          super(...args);
          this.bg_item = undefined;
          this.img_lock = undefined;
          this.lb_level = undefined;
          this.data = undefined;
          this.maxOpacity = 100;
        }

        init() {
          this.bg_item = this.node.getChildByName("bg_item");
          this.img_lock = this.node.getChildByName("img_lock");
          this.lb_level = this.node.getChildByName("lb_level");
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
//# sourceMappingURL=abc55237a1805ed164f41d31dde4127e9e87cbfb.js.map