System.register(["__unresolved_0", "cc", "Singleton", "ui_manager/Name2Panel", "ui_manager/UIManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Singleton, _decorator, PanelName, UIManager, _dec, _class, _crd, ccclass, property, GameTipManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPanelName(extras) {
    _reporterNs.report("PanelName", "ui_manager/Name2Panel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipData(extras) {
    _reporterNs.report("GameTipData", "./GameTipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipView(extras) {
    _reporterNs.report("GameTipView", "./GameTipView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_Singleton) {
      Singleton = _Singleton.Singleton;
    }, function (_ui_managerName2Panel) {
      PanelName = _ui_managerName2Panel.PanelName;
    }, function (_ui_managerUIManager) {
      UIManager = _ui_managerUIManager.UIManager;
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
        }

        showTip(name, data) {
          if (!this.gameTipView) {
            return;
          }

          this.gameTipView.showTip(name, data);
        }

        moveTip(pos) {
          if (!this.gameTipView) {
            return;
          }

          this.gameTipView.node.setWorldPosition(pos.x, pos.y, 0);
        }

        hideTip() {
          if (!this.gameTipView) {
            return;
          }

          this.gameTipView.hideTips();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f7f4ae687da5ad89634aabcf20e37c89ae66e28.js.map