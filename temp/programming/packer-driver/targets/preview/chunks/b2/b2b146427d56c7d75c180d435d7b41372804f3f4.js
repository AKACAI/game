System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, tween, UIOpacity, Vec3, UIPanel, UILayer, LogManager, NodeHelper, LoadType, ResManager, LevelSelectModeItem, _dec, _class, _crd, ccclass, property, LevelSelectView;

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfISetDataModeItem(extras) {
    _reporterNs.report("ISetDataModeItem", "./LevelSelectModeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelSelectModeItem(extras) {
    _reporterNs.report("LevelSelectModeItem", "./LevelSelectModeItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UIPanel = _unresolved_2.UIPanel;
    }, function (_unresolved_3) {
      UILayer = _unresolved_3.UILayer;
    }, function (_unresolved_4) {
      LogManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      NodeHelper = _unresolved_5.default;
    }, function (_unresolved_6) {
      LoadType = _unresolved_6.LoadType;
      ResManager = _unresolved_6.ResManager;
    }, function (_unresolved_7) {
      LevelSelectModeItem = _unresolved_7.LevelSelectModeItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f0cem/429PoKE7/MlkF+xE", "LevelSelectView", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Prefab', 'tween', 'UIOpacity', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelSelectView", LevelSelectView = (_dec = ccclass('LevelSelectView'), _dec(_class = class LevelSelectView extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);
          this.node_center = undefined;
          this.node_mode_items = undefined;
          this.btn_close = undefined;
          this.btn_tip = undefined;
          this.node_block_click_mask = undefined;
          this.modeItems = undefined;
          this.isInAnim = undefined;
          this.modeItemPath = "level_select_mode_item";
          this.tweenShowAnimData = {
            animTime: 0.7
          };
        }

        init() {
          super.init();
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).normal;
          this.node_center = this.node.getChildByName("node_center");
          this.node_mode_items = this.node_center.getChildByName("node_mode_items");
          this.btn_close = this.node_center.getChildByName("btn_close");
          this.btn_tip = this.node_center.getChildByName("btn_tip");
          this.node_block_click_mask = this.node_center.getChildByName("node_block_click_mask");
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeSizeFullScreen(this.node_block_click_mask);
          this.addListener();
        }

        open() {
          super.open();
          this.initUI();
          this.isInAnim = false;
          this.node_block_click_mask.active = false;
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

        initUI() {
          this.modeItems = [];
          var modeData = [{
            name: "保卫小车",
            bg_path: "",
            clickCb: () => {
              this.showOneMode(0);
            }
          }];
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset(this.modeItemPath, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).PrefableRes, this.bundleName, prefab => {
            if (!this.node_mode_items || !this.modeItems) {
              (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
                error: Error()
              }), LogManager) : LogManager).error(this.panelName, "已经正在销毁了！！");
              return;
            }

            for (var i = 0; i < modeData.length; i++) {
              var node = instantiate(prefab);
              var itemCpt = node.getComponent(_crd && LevelSelectModeItem === void 0 ? (_reportPossibleCrUseOfLevelSelectModeItem({
                error: Error()
              }), LevelSelectModeItem) : LevelSelectModeItem);

              if (itemCpt) {
                itemCpt.init();
                itemCpt.setData(modeData[i]);
              }

              this.node_mode_items.addChild(node);
              this.modeItems.push(itemCpt);
            }
          });
        }

        showOneMode(index) {
          if (index >= this.modeItems.length) {
            return;
          }

          if (this.isInAnim) {
            return;
          }

          this.isInAnim = true;
          this.node_block_click_mask.active = true;

          for (var i = 0; i < this.modeItems.length; i++) {
            var item = this.modeItems[i];

            if (i == index) {
              tween(item.node).to(this.tweenShowAnimData.animTime, {
                position: new Vec3(-300, -40),
                scale: new Vec3(1.2, 1.2, 1)
              }).call(() => {
                this.isInAnim = false;
                this.node_block_click_mask.active = false;
              }).start();
            } else {
              tween(item.node).to(this.tweenShowAnimData.animTime, {
                position: new Vec3(-350, -40)
              }).start();
              var opacityCpt = item.getComponent(UIOpacity);

              if (i != index && opacityCpt) {
                tween(opacityCpt).to(this.tweenShowAnimData.animTime, {
                  opacity: 0
                }).start();
              }
            }
          }
        }

        close() {
          super.close();
        }

        dispose() {
          super.dispose();

          if (this.modeItems) {
            for (var i = 0; i < this.modeItems.length; i++) {
              var _this$modeItems$i;

              (_this$modeItems$i = this.modeItems[i]) == null ? void 0 : _this$modeItems$i.dispose();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2b146427d56c7d75c180d435d7b41372804f3f4.js.map