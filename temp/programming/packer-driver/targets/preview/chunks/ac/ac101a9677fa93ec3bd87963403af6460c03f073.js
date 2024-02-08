System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, UIPanel, UILayer, LogManager, NodeHelper, LoadType, ResManager, LevelSelectModeItem, _dec, _class, _crd, ccclass, property, LevelSelectView;

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

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Prefab']);

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
          this.modeItems = undefined;
          this.modeItemPath = "level_select_mode_item";
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
          this.addListener();
        }

        open() {
          super.open();
          this.initUI();
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
//# sourceMappingURL=ac101a9677fa93ec3bd87963403af6460c03f073.js.map