System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeHelper, MapManager, _dec, _class, _crd, ccclass, property, LevelItem;

  function _reportPossibleCrUseOfNodeHelper(extras) {
    _reporterNs.report("NodeHelper", "../../../common/NodeHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "../../../manager/map_manager/MapManager", _context.meta, extras);
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
    }, function (_unresolved_3) {
      MapManager = _unresolved_3.MapManager;
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
        constructor() {
          super(...arguments);
          this.bg_item = undefined;
          this.img_lock = undefined;
          this.lb_level = undefined;
          this.data = undefined;
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
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.bg_item, () => {
            if (this.data && !this.data.isLock) {
              (_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
                error: Error()
              }), MapManager) : MapManager).getInstance().enterMap(this.data.mapPath);
            }
          }, this, undefined, false);
        }

        setData(data) {
          if (!data) {
            return;
          }

          this.data = data;

          if (data.isLock) {
            this.img_lock.active = false;
          } else {
            (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
              error: Error()
            }), NodeHelper) : NodeHelper).setLabelString(this.lb_level, data.level);
          }
        }

        dispose() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ca25b776d102e7e3c9c22142ded4d8d9a991f91.js.map