System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, tween, Vec3, UIPanel, UILayer, LogManager, NodeHelper, LoadType, ResManager, LevelSelectModeItem, Display, MapData, _dec, _class, _crd, ccclass, property, LevelSelectView, LevelSelectViewStatus;

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

  function _reportPossibleCrUseOfDisplay(extras) {
    _reporterNs.report("Display", "../../../common/Display", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelItem(extras) {
    _reporterNs.report("LevelItem", "./LevelItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapData(extras) {
    _reporterNs.report("MapData", "../../../manager/map_manager/MapData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIMapConfig(extras) {
    _reporterNs.report("IMapConfig", "../../../manager/map_manager/MapData", _context.meta, extras);
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
    }, function (_unresolved_8) {
      Display = _unresolved_8.Display;
    }, function (_unresolved_9) {
      MapData = _unresolved_9.default;
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
          this.node_level_items = undefined;
          this.modeItems = undefined;
          this.levelItems = undefined;
          this.status = undefined;
          this.modeItemPath = "level_select_mode_item";
          this.levelItemPath = "level_item";
          this.modeItemPrefab = undefined;
          this.levelItemPrefab = undefined;
          this.tweenShowAnimData = {
            animTime: 0.7
          };
          this.modeData = undefined;
        }

        init() {
          super.init();
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).normal;
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset(this.modeItemPath, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).PrefableRes, this.bundleName, prefab => {
            this.modeItemPrefab = prefab;
          });
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset(this.levelItemPath, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).PrefableRes, this.bundleName, prefab => {
            this.levelItemPrefab = prefab;
          });
          this.node_center = this.node.getChildByName("node_center");
          this.node_mode_items = this.node_center.getChildByName("node_mode_items");
          this.btn_close = this.node_center.getChildByName("btn_close");
          this.btn_tip = this.node_center.getChildByName("btn_tip");
          this.node_block_click_mask = this.node_center.getChildByName("node_block_click_mask");
          this.node_level_items = this.node_center.getChildByName("node_level_items");
          (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
            error: Error()
          }), NodeHelper) : NodeHelper).setNodeSizeFullScreen(this.node_block_click_mask);
          this.addListener();
        }

        open() {
          super.open();
          this.status = LevelSelectViewStatus.origin;
          this.initItemUI();
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

        initItemUI() {
          var _this = this;

          this.modeItems = [];
          this.modeData = [];
          var modeDict = (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData).getInstance().getModeDatas();

          for (var key in modeDict) {
            var modeItem = modeDict[key];
            this.modeData.push(modeItem);
          }

          var modeData = [];

          var _loop = function _loop(index) {
            var modeItem = _this.modeData[index];
            modeData.push({
              name: modeItem.modeName,
              bg_path: modeItem.modeBg,
              clickCb: () => {
                _this.showOneMode(index);

                _this.showModeLevel(modeItem.modeId);
              }
            });
          };

          for (var index = 0; index < this.modeData.length; index++) {
            _loop(index);
          }

          if (!this.node_mode_items || !this.modeItems) {
            (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
              error: Error()
            }), LogManager) : LogManager).error(this.panelName, "已经正在销毁了！！");
            return;
          }

          var screenWidth = (_crd && Display === void 0 ? (_reportPossibleCrUseOfDisplay({
            error: Error()
          }), Display) : Display).getInstance().getWindowSize().x;
          var spacingWithSceenX = 200;
          var spacingX = (screenWidth - spacingWithSceenX * 2) / (modeData.length - 1);
          var startPosX = -(screenWidth - spacingWithSceenX * 2) / 2;

          for (var i = 0; i < modeData.length; i++) {
            var node = instantiate(this.modeItemPrefab);
            this.node_mode_items.addChild(node);
            (_crd && NodeHelper === void 0 ? (_reportPossibleCrUseOfNodeHelper({
              error: Error()
            }), NodeHelper) : NodeHelper).setPosX(node, startPosX + spacingX * i);
            var itemCpt = node.getComponent(_crd && LevelSelectModeItem === void 0 ? (_reportPossibleCrUseOfLevelSelectModeItem({
              error: Error()
            }), LevelSelectModeItem) : LevelSelectModeItem);

            if (itemCpt) {
              itemCpt.init();
              itemCpt.setData(modeData[i]);
            }

            this.modeItems.push(itemCpt);
          }
        }

        showOneMode(index) {
          if (index >= this.modeItems.length) {
            return;
          }

          if (this.status != LevelSelectViewStatus.origin) {
            return;
          }

          this.status = LevelSelectViewStatus.showAnim;
          this.node_block_click_mask.active = true;
          var order = 1; // 用来标记当前是第几个小模式

          for (var i = 0; i < this.modeItems.length; i++) {
            var item = this.modeItems[i];

            if (i == index) {
              item.node.setSiblingIndex(this.modeItems.length - 1);
              tween(item.node).to(this.tweenShowAnimData.animTime, {
                position: new Vec3(-300, -40),
                scale: new Vec3(1.2, 1.2, 1)
              }).call(() => {
                this.status = LevelSelectViewStatus.idle;
                this.node_block_click_mask.active = false;
              }).start();
            } else {
              item.node.setSiblingIndex(this.modeItems.length - 1 - order);
              tween(item.node).to(this.tweenShowAnimData.animTime * 0.8, {
                position: new Vec3(-320 - 30 * order, -60),
                scale: new Vec3(1, 1, 1)
              }, {}).call(() => {}).start();
              order++;
            }
          }
        }

        showModeLevel(mode) {
          var modeData = (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData).getInstance().getModeDatasById(mode);
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

          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().releaseAsset(this.modeItemPrefab);
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().releaseAsset(this.levelItemPrefab);
        }

      }) || _class));

      LevelSelectViewStatus = /*#__PURE__*/function (LevelSelectViewStatus) {
        LevelSelectViewStatus[LevelSelectViewStatus["origin"] = 1] = "origin";
        LevelSelectViewStatus[LevelSelectViewStatus["showAnim"] = 2] = "showAnim";
        LevelSelectViewStatus[LevelSelectViewStatus["idle"] = 3] = "idle";
        LevelSelectViewStatus[LevelSelectViewStatus["rotateAnim"] = 4] = "rotateAnim";
        return LevelSelectViewStatus;
      }(LevelSelectViewStatus || {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d01aef9877dfefa5091e9358dd6269502d11dfa.js.map