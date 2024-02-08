System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, instantiate, Singleton, ResManager, LoadType, ConstStr, UIPanel, ResDestroyType, Stack, _dec, _class, _crd, ccclass, property, UILayer, UIManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "../ResManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../../common/IPreInit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStack(extras) {
    _reporterNs.report("Stack", "../../utils/Stack", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      ResManager = _unresolved_3.ResManager;
      LoadType = _unresolved_3.LoadType;
    }, function (_unresolved_4) {
      ConstStr = _unresolved_4.ConstStr;
    }, function (_unresolved_5) {
      UIPanel = _unresolved_5.UIPanel;
      ResDestroyType = _unresolved_5.ResDestroyType;
    }, function (_unresolved_6) {
      Stack = _unresolved_6.default;
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
        UILayer[UILayer["normal"] = 2] = "normal";
        UILayer[UILayer["alert_no_bg"] = 3] = "alert_no_bg";
        UILayer[UILayer["alert"] = 4] = "alert";
        UILayer[UILayer["screen"] = 5] = "screen";
        return UILayer;
      }({}));

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec(_class = class UIManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        //  应该配合一个栈
        init() {
          this.layer2node = new Map();
          this.openingPanel = new Map();
          this.normalPanelStack = new (_crd && Stack === void 0 ? (_reportPossibleCrUseOfStack({
            error: Error()
          }), Stack) : Stack)();
          this.mainCanvas = director.getScene().getChildByName("main_canvas");
          let node_game_view = this.mainCanvas.getChildByName("node_ui_view");
          node_game_view.children.forEach((node, index) => {
            this.layer2node.set(index, node);
          });

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }

          console.log("UIManager初始化完成!");
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
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
              uIPanel.panelName = panelName;
              uIPanel.bundleName = bundleName;
              uIPanel.init();
              uIPanel.open();

              if (uIPanel.layer == UILayer.normal) {
                let topPanel = this.normalPanelStack.top();

                if (topPanel) {
                  topPanel.close();
                }

                this.normalPanelStack.push(uIPanel);
              }

              finishCb == null ? void 0 : finishCb();
            });
          });
        }

        isOpenPanel(panelName) {
          if (!panelName) {
            return false;
          }

          return this.openingPanel.has(panelName);
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
          this.openingPanel.delete(panelName);
          uIPanel.close();

          if (uIPanel.layer == UILayer.normal) {
            this.normalPanelStack.pop();
            let topPanel = this.normalPanelStack.top();

            if (topPanel) {
              topPanel.open();
            }
          }

          if (uIPanel.resDestroyType == (_crd && ResDestroyType === void 0 ? (_reportPossibleCrUseOfResDestroyType({
            error: Error()
          }), ResDestroyType) : ResDestroyType).directlyRelease) {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
          } else if (uIPanel.resDestroyType == (_crd && ResDestroyType === void 0 ? (_reportPossibleCrUseOfResDestroyType({
            error: Error()
          }), ResDestroyType) : ResDestroyType).delayRelease) {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
          } else {
            this.disposePanel(uIPanel);
            uIPanel.destroy();
          }
        }

        disposePanel(panel) {
          //panel.dispose();
          let panelName = panel.panelName;
          let panelPath = (_crd && ConstStr === void 0 ? (_reportPossibleCrUseOfConstStr({
            error: Error()
          }), ConstStr) : ConstStr).PanelPath[panelName];
          let bundleName = panelPath.split("/")[0];
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().releaseBundle(bundleName);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=900b23eb776e87eec8702e3ae6d50b22c3016614.js.map