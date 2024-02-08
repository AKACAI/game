System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, LogManager, NodeHelper, LoadType, ResManager, _dec, _class, _crd, ccclass, property, LevelSelectModeItem;

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../../utils/LogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeHelper(extras) {
    _reporterNs.report("NodeHelper", "../../../common/NodeHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "../../../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../../../manager/ResManager", _context.meta, extras);
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
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      LogManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      NodeHelper = _unresolved_3.default;
    }, function (_unresolved_4) {
      LoadType = _unresolved_4.LoadType;
      ResManager = _unresolved_4.ResManager;
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
        constructor() {
          super(...arguments);
          this.img_mode = undefined;
          this.lb_mode_name = undefined;
        }

        init() {
          this.img_mode = this.node.getChildByName("img_mode");
          this.lb_mode_name = this.node.getChildByName("lb_mode_name");
          this.addListener();
        }

        addListener() {
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_close, () => {
            this.closeBySelf();
          }, this);
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeClickEvent(this.btn_tip, () => {}, this);
        }

        updateUI() {
          var modeData = [{
            name: "保卫小车",
            bg_path: "",
            clickCb: () => {
              (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
                error: Error()
              }), LogManager) : LogManager).log("保卫小车，启动！");
            }
          }];
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset(this.modeItemPath, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).PrefableRes, this.bundleName, prefab => {
            for (var i = 0; i < modeData.length; i++) {
              var node = instantiate(prefab);
              var itemCpt = node.getComponent(LevelSelectModeItem);

              if (itemCpt) {}
            }
          });
        }

        close() {
          super.close();
        }

        dispose() {
          super.dispose();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=267699b61d7f905d74fd6177df3979ef4057a338.js.map