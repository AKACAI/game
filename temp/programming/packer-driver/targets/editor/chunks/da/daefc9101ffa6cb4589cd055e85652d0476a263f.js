System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, UILayer, LogManager, NodeHelper, LoadType, ResManager, _dec, _class, _crd, ccclass, property, LevelSelectModeItem;

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../manager/ui_manager/UIManager", _context.meta, extras);
  }

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
      UILayer = _unresolved_2.UILayer;
    }, function (_unresolved_3) {
      LogManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      NodeHelper = _unresolved_4.default;
    }, function (_unresolved_5) {
      LoadType = _unresolved_5.LoadType;
      ResManager = _unresolved_5.ResManager;
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
          this.btn_close = undefined;
          this.btn_tip = undefined;
          this.modeItemPath = "level_select_mode_item";
        }

        init() {
          super.init();
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).menu;
          this.node_center = this.node.getChildByName("node_right");
          this.node_mode_items = this.node_center.getChildByName("node_mode_items");
          this.btn_close = this.node_center.getChildByName("btn_close");
          this.btn_tip = this.node_center.getChildByName("btn_tip");
          this.addListener();
        }

        open() {
          super.open();
          this.updateUI();
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
          let modeData = [{
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
            for (let i = 0; i < modeData.length; i++) {
              let node = instantiate(prefab);
              let itemCpt = node.getComponent(LevelSelectModeItem);

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
//# sourceMappingURL=daefc9101ffa6cb4589cd055e85652d0476a263f.js.map