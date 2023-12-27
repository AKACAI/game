System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIPanel, _dec, _class, _crd, ccclass, property, GameStartMenuView;

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "../../../manager/ui_manager/UIPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIPanel = _unresolved_2.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90390qpthVFoaareJMhChrk", "GameStartMenuView", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStartMenuView", GameStartMenuView = (_dec = ccclass('GameStartMenuView'), _dec(_class = class GameStartMenuView extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);
          this.itemCreateCount = 5;
        }

        init() {
          this._layer = UILayer.game;
          this.bg_tip = this.node.getChildByName("bg_tip");
          this.lb_name = this.node.getChildByName("lb_name").getComponent(Label);
          this.node_tips = this.node.getChildByName("node_tips");
          ResManager.getInstance().loadAsset("game_tip_item", LoadType.PrefableRes, "game_tip", prefab => {
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e61fe6d9bb91f09d66bd30a26a8e585517dfb538.js.map