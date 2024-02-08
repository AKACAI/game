System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UILayer, UIManager, _dec, _class, _crd, ccclass, property, UIPanel, ResDestroyType;

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "./UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
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
      UILayer = _unresolved_2.UILayer;
      UIManager = _unresolved_2.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66348h9mFNJWIRV0D/TtxxW", "UIPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPanel", UIPanel = (_dec = ccclass('UIPanel'), _dec(_class = class UIPanel extends Component {
        constructor(...args) {
          super(...args);
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).alert_no_bg;
          this._resDestroyType = ResDestroyType.delayRelease;
          this.panelName = "";
          this.bundleName = "";
        }

        //protected preloadResDict: { [type: number]: string[] }; //type是LoadType
        init() {}

        open() {
          this.node.active = true;
        }

        close() {
          this.node.active = false;
        }

        closeBySelf() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().closePanel(this.panelName);
        }

        dispose() {}

        get layer() {
          return this._layer;
        }

        get resDestroyType() {
          return this._resDestroyType;
        } // /**在init之前调用，增加 */
        // protected addLoadPrefab(path: string, bundleName?: string) {
        //     this.preloadResDict[LoadType.PrefableRes].push();
        //     if (bundleName) {
        //         ResManager.getInstance().loadAsset(path, LoadType.PrefableRes, bundleName, (prefab: Prefab) => {
        //             this.modeItemPrefab = prefab;
        //         });
        //     }
        // }


      }) || _class));

      _export("ResDestroyType", ResDestroyType = /*#__PURE__*/function (ResDestroyType) {
        ResDestroyType[ResDestroyType["directlyRelease"] = 0] = "directlyRelease";
        ResDestroyType[ResDestroyType["delayRelease"] = 1] = "delayRelease";
        ResDestroyType[ResDestroyType["neverRelease"] = 2] = "neverRelease";
        return ResDestroyType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=662b845be930e2a9a2e0b57b1f4882be75297fbb.js.map