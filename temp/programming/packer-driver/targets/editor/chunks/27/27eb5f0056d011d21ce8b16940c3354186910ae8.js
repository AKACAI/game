System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, Singleton, GameTipManager, InputManager, MapManager, _dec, _class, _crd, ccclass, GameState, GameManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../../modules/game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTipManager(extras) {
    _reporterNs.report("GameTipManager", "../../modules/ui/game_tip/GameTipManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputManager(extras) {
    _reporterNs.report("InputManager", "../InputManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "../map_manager/MapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../../common/IPreInit", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      GameTipManager = _unresolved_3.GameTipManager;
    }, function (_unresolved_4) {
      InputManager = _unresolved_4.InputManager;
    }, function (_unresolved_5) {
      MapManager = _unresolved_5.MapManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf877HzhklPnI0CfASCRuq4", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'director', 'Vec2', 'Node']);

      ({
        ccclass
      } = _decorator);

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NotInGame"] = 0] = "NotInGame";
        GameState[GameState["Pause"] = 1] = "Pause";
        GameState[GameState["Ongoing"] = 2] = "Ongoing";
        return GameState;
      }(GameState || {});

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 应该引入一个ObjectManager的东西
        // private _gameObjects: ObjectBase[][];   // 物体的输入有优先级的区分，0级为最优先，依次递减
        // 当前鼠标检测到的物体
        init() {
          this._gameState = GameState.Ongoing;
          this._gameRoot = director.getScene().getChildByName("main_canvas").getChildByName("game_root");
          this._gameObjects = [];
          console.log("GameManager初始化完成!");

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }

          this.start();
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
        }

        get gameState() {
          return this._gameState;
        }

        get gameRoot() {
          return this._gameRoot;
        }

        start() {
          this._gameState = GameState.Ongoing;
          (_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
            error: Error()
          }), MapManager) : MapManager).getInstance().enterMap("100001");
        }

        pause() {
          if (this._gameState != GameState.Ongoing) {
            return;
          }

          this._gameState = GameState.Pause;
        }

        unpause() {
          if (this._gameState != GameState.Pause) {
            return;
          }

          this._gameState = GameState.Ongoing;
        }

        update(deltaTime) {
          if (this._gameState == GameState.Ongoing) {
            let curMousePos = (_crd && InputManager === void 0 ? (_reportPossibleCrUseOfInputManager({
              error: Error()
            }), InputManager) : InputManager).getInstance().mousePos;
            let param = {
              mousePos: curMousePos
            }; // 应该改成鼠标坐标变化时调用，而不是每一帧都调用

            let hasShowTip = false;

            for (let i = 0; i < this._gameObjects.length; i++) {
              let object = this._gameObjects[i]; // console.log(object.contains(curMousePos))

              if (object.contains(curMousePos)) {
                if (object != this._curDetectObject) {
                  this._curDetectObject = object;
                  (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
                    error: Error()
                  }), GameTipManager) : GameTipManager).getInstance().showTip(object.getObjectParam().name, object.getTipData());
                  (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
                    error: Error()
                  }), GameTipManager) : GameTipManager).getInstance().moveTip(curMousePos);
                  object.mouseOnObject(true, param);
                } else {
                  (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
                    error: Error()
                  }), GameTipManager) : GameTipManager).getInstance().moveTip(curMousePos);
                }

                hasShowTip = true;
                break;
              }
            } // 在不需要显示提示并且上一帧有检测到物体（说明现在没检测到


            if (!hasShowTip && this._curDetectObject) {
              (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
                error: Error()
              }), GameTipManager) : GameTipManager).getInstance().hideTip();
              this._curDetectObject = null;
            }
          } else {}
        }

        addObject(object) {
          this._gameObjects.push(object);
        }

        removeObject(object) {//this._gameObjects.
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27eb5f0056d011d21ce8b16940c3354186910ae8.js.map