System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, UITransform, instantiate, ResManager, LoadType, UILayer, UIPanel, GameTipItem, _dec, _class, _crd, ccclass, property, GameTipView;

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../../../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "../../../manager/ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../manager/ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "./GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipItem(extras) {
    _reporterNs.report("GameTipItem", "./GameTipItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResManager = _unresolved_2.ResManager;
      LoadType = _unresolved_2.LoadType;
    }, function (_unresolved_3) {
      UILayer = _unresolved_3.UILayer;
    }, function (_unresolved_4) {
      UIPanel = _unresolved_4.UIPanel;
    }, function (_unresolved_5) {
      GameTipItem = _unresolved_5.GameTipItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90390qpthVFoaareJMhChrk", "GameTipView", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Prefab', 'UITransform', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameTipView", GameTipView = (_dec = ccclass('GameTipView'), _dec(_class = class GameTipView extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);
          this.itemCreateCount = 5;
        }

        init() {
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).game;
          this.bg_tip = this.node.getChildByName("bg_tip");
          this.lb_name = this.node.getChildByName("lb_name").getComponent(Label);
          this.node_tips = this.node.getChildByName("node_tips");
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset("game_tip_item", (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).PrefableRes, "game_tip", prefab => {
            this.itemPrefab = prefab;

            for (var i = 0; i < this.itemCreateCount; i++) {
              this.createTip();
            }
          }, null, this);
        }

        open() {}

        close() {}

        dispose() {
          this.destroyTips();
        }

        showTip(name, data) {
          this.node.active = true;

          if (!data || data.length == 0) {
            this.node_tips.active = false;
            return;
          }

          this.node_tips.active = true;
          this.tipsData = data;
          this.lb_name.string = name;
          var node_height = 45;
          var curPosY = 0;
          var maxShowCount = Math.min(data.length, this.node_tips.children.length);

          for (var i = 0; i < maxShowCount; i++) {
            var curTipNode = this.node_tips.children[i];
            var curTipItemCpt = curTipNode.getComponent(_crd && GameTipItem === void 0 ? (_reportPossibleCrUseOfGameTipItem({
              error: Error()
            }), GameTipItem) : GameTipItem);

            if (curTipItemCpt) {
              curTipItemCpt.setData(data[i]);
              curTipNode.setPosition(0, curPosY, 0);
              curTipNode.active = true;
              var item_height = curTipItemCpt.getComponent(UITransform).contentSize.y;
              curPosY -= item_height;
              node_height += item_height;
            }
          }

          for (var _i = maxShowCount; _i < this.node_tips.children.length; _i++) {
            this.node_tips.children[_i].active = false;
          }

          var node_width = this.node.getComponent(UITransform).contentSize.x;
          this.node.getComponent(UITransform).setContentSize(node_width, node_height);
          this.bg_tip.getComponent(UITransform).setContentSize(node_width, node_height);
        }

        hideTips() {
          this.node.active = false;
        }

        createTip() {
          var node = instantiate(this.itemPrefab);
          var tipItemCpt = node.getComponent(_crd && GameTipItem === void 0 ? (_reportPossibleCrUseOfGameTipItem({
            error: Error()
          }), GameTipItem) : GameTipItem);

          if (tipItemCpt) {
            tipItemCpt.init();
            this.node_tips.addChild(node);
            node.active = false;
            return node;
          }

          return null;
        }

        destroyTips() {
          for (var i = this.node_tips.children.length - 1; i >= 0; i++) {
            var item = this.node.children[i];
            item.destroy();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fbf0fc718800da77191e0babc14bd5480f2340f.js.map