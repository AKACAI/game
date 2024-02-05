System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Singleton, PanelName, UIManager, _dec, _class, _crd, ccclass, property, GameTipManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelName(extras) {
    _reporterNs.report("PanelName", "../../../manager/ui_manager/Name2Panel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../../manager/ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "./GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipView(extras) {
    _reporterNs.report("GameTipView", "./GameTipView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../../../common/IPreInit", _context.meta, extras);
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
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      PanelName = _unresolved_3.PanelName;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f11be1s/SJLv7Bei1csjwDo", "GameTipManager", undefined);

      __checkObsolete__(['_decorator', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameTipManager", GameTipManager = (_dec = ccclass('GameTipManager'), _dec(_class = class GameTipManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);
          this.showObjectId = 0;
        }

        init() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().openPanel((_crd && PanelName === void 0 ? (_reportPossibleCrUseOfPanelName({
            error: Error()
          }), PanelName) : PanelName).GameTip, () => {
            this.gameTipView = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).getInstance().getPanel((_crd && PanelName === void 0 ? (_reportPossibleCrUseOfPanelName({
              error: Error()
            }), PanelName) : PanelName).GameTip);
            this.hideTip();
          });

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }

          this.isShowing = false;
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
        }

        showTip(showObjectId, name, data) {
          if (!this.gameTipView) {
            return;
          }

          if (!this.isShowing) {
            return;
          }

          if (this.showObjectId == showObjectId) {
            return;
          }

          this.showObjectId = showObjectId;
          this.gameTipView.showTip(name, data);
        }

        moveTip(pos) {
          if (!this.gameTipView) {
            return;
          }

          if (!this.isShowing) {
            return;
          }

          this.gameTipView.node.setWorldPosition(pos.x, pos.y, 0);
        }

        hideTip() {
          if (!this.gameTipView) {
            return;
          }

          if (this.isShowing) {
            return;
          }

          this.gameTipView.hideTips();
          this.showObjectId = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c293350b38ed5c5451873cbf246ce7ca2dbc8e3.js.map