System.register(["__unresolved_0", "cc", "ResManager", "Singleton", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ResManager, LoadType, Singleton, _decorator, director, instantiate, ConstStr, UIPanel, ResDestroyType, _dec, _class, _crd, ccclass, property, UILayer, UIManager;

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstStr(extras) {
    _reporterNs.report("ConstStr", "./Name2Panel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "./UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResDestroyType(extras) {
    _reporterNs.report("ResDestroyType", "./UIPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
      instantiate = _cc.instantiate;
    }, function (_ResManager) {
      ResManager = _ResManager.ResManager;
      LoadType = _ResManager.LoadType;
    }, function (_Singleton) {
      Singleton = _Singleton.Singleton;
    }, function (_unresolved_2) {
      ConstStr = _unresolved_2.ConstStr;
    }, function (_unresolved_3) {
      UIPanel = _unresolved_3.UIPanel;
      ResDestroyType = _unresolved_3.ResDestroyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8957yKvOVLib8kT/7HRmYs", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Vec3', 'director', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UILayer", UILayer = /*#__PURE__*/function (UILayer) {
        UILayer[UILayer["mouse_input"] = 0] = "mouse_input";
        UILayer[UILayer["game"] = 1] = "game";
        UILayer[UILayer["menu"] = 2] = "menu";
        UILayer[UILayer["screen"] = 3] = "screen";
        UILayer[UILayer["alert"] = 4] = "alert";
        return UILayer;
      }({}));

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec(_class = class UIManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        init() {
          this.layer2node = new Map();
          this.openingPanel = new Map();
          this.mainCanvas = director.getScene().getChildByName("main_canvas");
          let node_game_view = this.mainCanvas.getChildByName("node_ui_view");
          node_game_view.children.forEach((node, index) => {
            this.layer2node.set(index, node);
          });
          console.log("UIManager初始化完成!"); // this.openPanel(PanelName.GamePanel);
        }

        getLayerNode(layer) {
          return this.layer2node.get(layer);
        }

        openPanel(panelName, finishCb, params) {
          if (!panelName) {
            return;
          }

          if (this.openingPanel.has(panelName)) {
            return;
          }

          let panelPath = (_crd && ConstStr === void 0 ? (_reportPossibleCrUseOfConstStr({
            error: Error()
          }), ConstStr) : ConstStr).PanelPath[panelName];
          let bundleName = panelPath.split("/")[0];
          let panelPrefabPath = panelPath.split("/")[1];
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadBundle(bundleName, () => {
            (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
              error: Error()
            }), ResManager) : ResManager).getInstance().loadAsset(panelPrefabPath, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
              error: Error()
            }), LoadType) : LoadType).PrefableRes, bundleName, prefab => {
              console.log("成功打开Panel：", panelName);
              let node = instantiate(prefab);
              let uIPanel = node.getComponent(_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
                error: Error()
              }), UIPanel) : UIPanel);
              node.parent = this.getLayerNode(uIPanel.layer);
              node.setPosition(0, 0, 0);
              this.openingPanel.set(panelName, uIPanel);
              uIPanel.init();
              uIPanel.bindFunc();
              uIPanel.open();
              finishCb == null ? void 0 : finishCb();
            });
          });
        }

        getPanel(panelName) {
          if (!panelName) {
            return null;
          }

          if (!this.openingPanel.has(panelName)) {
            return null;
          }

          let uIPanel = this.openingPanel.get(panelName);
          return uIPanel;
        }

        closePanel(panelName) {
          if (!panelName) {
            return;
          }

          if (!this.openingPanel.has(panelName)) {
            return;
          }

          let uIPanel = this.openingPanel.get(panelName);
          let node = uIPanel.node;
          uIPanel.disbindFunc();
          uIPanel.close();

          if (uIPanel.resDestroyType == (_crd && ResDestroyType === void 0 ? (_reportPossibleCrUseOfResDestroyType({
            error: Error()
          }), ResDestroyType) : ResDestroyType).directlyRelease) {
            let panelPath = (_crd && ConstStr === void 0 ? (_reportPossibleCrUseOfConstStr({
              error: Error()
            }), ConstStr) : ConstStr).PanelPath[panelName];
            let bundleName = panelPath.split("/")[0];
            (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
              error: Error()
            }), ResManager) : ResManager).getInstance().releaseBundle(bundleName);
          } else if (uIPanel.resDestroyType == (_crd && ResDestroyType === void 0 ? (_reportPossibleCrUseOfResDestroyType({
            error: Error()
          }), ResDestroyType) : ResDestroyType).delayRelease) {} else {}
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59478858e869a2e0513cd824693132afdd668696.js.map