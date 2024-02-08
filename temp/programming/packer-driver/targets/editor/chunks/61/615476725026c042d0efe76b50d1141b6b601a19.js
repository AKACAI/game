System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec2, Singleton, UIManager, UILayer, _dec, _class, _crd, ccclass, property, InputManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "./ui_manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../common/IPreInit", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
      UILayer = _unresolved_3.UILayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83797zKnDZEbJk+qMAXwLfS", "InputManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InputManager", InputManager = (_dec = ccclass('InputManager'), _dec(_class = class InputManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        init() {
          this._layerMouseInput = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).getInstance().getLayerNode((_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).mouse_input);
          this._mousePos = new Vec2();
          this._isLeftBtnPressed = false;
          this.initFunc();

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
        }

        get mousePos() {
          return this._mousePos;
        }

        getMouseData() {
          let mouseParam = {
            mousePos: this._mousePos,
            isLeftBtnPressed: this._isLeftBtnPressed
          };
          return mouseParam;
        }

        initFunc() {
          this._layerMouseInput.on(Node.EventType.MOUSE_MOVE, mouseEvent => {
            this._mousePos = mouseEvent.getUILocation();
          });

          this._layerMouseInput.on(Node.EventType.MOUSE_DOWN, () => {
            this._isLeftBtnPressed = true;
          });

          this._layerMouseInput.on(Node.EventType.MOUSE_UP, () => {
            this._isLeftBtnPressed = false;
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=615476725026c042d0efe76b50d1141b6b601a19.js.map