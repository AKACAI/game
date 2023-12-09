System.register(["__unresolved_0", "cc", "ui_manager/UIManager", "ui_manager/UIPanel", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UILayer, UIPanel, ResDestroyType, GameToolsView, GridSquare, _dec, _class, _crd, ccclass, property, GamePanel;

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResDestroyType(extras) {
    _reporterNs.report("ResDestroyType", "ui_manager/UIPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameToolsView(extras) {
    _reporterNs.report("GameToolsView", "./GameToolsView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridSquare(extras) {
    _reporterNs.report("GridSquare", "./GridSquare", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_ui_managerUIManager) {
      UILayer = _ui_managerUIManager.UILayer;
    }, function (_ui_managerUIPanel) {
      UIPanel = _ui_managerUIPanel.UIPanel;
      ResDestroyType = _ui_managerUIPanel.ResDestroyType;
    }, function (_unresolved_2) {
      GameToolsView = _unresolved_2.GameToolsView;
    }, function (_unresolved_3) {
      GridSquare = _unresolved_3.GridSquare;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "144a3ns45xInLM0+Vzgrb9W", "GamePanel", undefined);

      __checkObsolete__(['_decorator', 'EventMouse', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePanel", GamePanel = (_dec = ccclass('GamePanel'), _dec(_class = class GamePanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor(...args) {
          super(...args);
          this.isMouseDown = false;
        }

        init() {
          this._layer = (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).game;
          this._resDestroyType = (_crd && ResDestroyType === void 0 ? (_reportPossibleCrUseOfResDestroyType({
            error: Error()
          }), ResDestroyType) : ResDestroyType).directlyRelease;
          this.factorySpace = this.node.getChildByName("factory_space");
          this.gridSquare = this.factorySpace.getChildByName("grid_square").getComponent(_crd && GridSquare === void 0 ? (_reportPossibleCrUseOfGridSquare({
            error: Error()
          }), GridSquare) : GridSquare);
          this.game_tools_cv = this.node.getChildByName("game_tools_view").getComponent(_crd && GameToolsView === void 0 ? (_reportPossibleCrUseOfGameToolsView({
            error: Error()
          }), GameToolsView) : GameToolsView);
          this.gridSquare.init();
          this.game_tools_cv.init();
          let nums = [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }, {
            num: 1
          }, {
            num: 6
          }, {
            num: 7
          }, {
            num: 1
          }, {
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }, {
            num: 1
          }, {
            num: 6
          }, {
            num: 7
          }, {
            num: 1
          }];
          this.game_tools_cv.setData(nums);
          this.isMouseDown = false;
        }

        bindFunc() {
          this.factorySpace.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          this.factorySpace.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.factorySpace.on(Node.EventType.MOUSE_DOWN, () => {
            this.isMouseDown = true;
          }, this);
          this.factorySpace.on(Node.EventType.MOUSE_UP, () => {
            this.isMouseDown = false;
          }, this);
        }

        open() {
          super.open();
        }

        onMouseWheel(event) {
          let scrollY = event.getScrollY();

          if (scrollY > 0) {
            this.gridSquare.zoomIn();
          } else if (scrollY < 0) {
            this.gridSquare.zoomOut();
          }
        }

        onMouseMove(event) {
          if (this.isMouseDown) {
            let moveVec = event.getDelta();
            this.gridSquare.move(moveVec);
          }
        }

        close() {
          super.close();
        }

        dispose() {
          this.game_tools_cv.dispose();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60b292b4a0dc9bd5eea0e9e9901160e002a6e4d6.js.map