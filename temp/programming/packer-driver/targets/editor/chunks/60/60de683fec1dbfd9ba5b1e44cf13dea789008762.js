System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, PhysicsSystem2D, Singleton, ObjectVisualTag, GameTipManager, InputManager, MapManager, _dec, _class, _crd, ccclass, GameState, GameManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../../modules/game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectVisualTag(extras) {
    _reporterNs.report("ObjectVisualTag", "../../modules/game/ObjectBase", _context.meta, extras);
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
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      ObjectVisualTag = _unresolved_3.ObjectVisualTag;
    }, function (_unresolved_4) {
      GameTipManager = _unresolved_4.GameTipManager;
    }, function (_unresolved_5) {
      InputManager = _unresolved_5.InputManager;
    }, function (_unresolved_6) {
      MapManager = _unresolved_6.MapManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf877HzhklPnI0CfASCRuq4", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'director', 'Vec2', 'Node', 'PhysicsSystem2D']);

      ({
        ccclass
      } = _decorator);

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NotInGame"] = 0] = "NotInGame";
        GameState[GameState["Pause"] = 1] = "Pause";
        GameState[GameState["Ongoing"] = 2] = "Ongoing";
        return GameState;
      }({}));

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 应该引入一个ObjectManager的东西
        // private _gameObjects: ObjectBase[][];   // 物体的输入有优先级的区分，0级为最优先，依次递减
        // 当前鼠标检测到的物体
        init() {
          this._gameState = GameState.NotInGame;
          this._gameRoot = director.getScene().getChildByName("main_canvas").getChildByName("game_root");
          this._gameObjects = {};

          for (let tag in _crd && ObjectVisualTag === void 0 ? (_reportPossibleCrUseOfObjectVisualTag({
            error: Error()
          }), ObjectVisualTag) : ObjectVisualTag) {
            this._gameObjects[tag] = [];
          }

          this._curDetectObjects = [];
          console.log("GameManager初始化完成!");

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }
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
          PhysicsSystem2D.instance.enable = true;
          (_crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
            error: Error()
          }), MapManager) : MapManager).getInstance().enterMap("100001");
        }

        pause() {
          if (this._gameState != GameState.Ongoing) {
            return;
          }

          for (const tag in this._gameObjects) {
            for (let i = 0; i < this._gameObjects[tag].length; i++) {
              const object = this._gameObjects[tag][i];

              if (!object) {
                continue;
              }

              object.pause();
            }
          }

          this._gameState = GameState.Pause;
        }

        resume() {
          if (this._gameState != GameState.Pause) {
            return;
          }

          for (const tag in this._gameObjects) {
            for (let i = 0; i < this._gameObjects[tag].length; i++) {
              const object = this._gameObjects[tag][i];

              if (!object) {
                continue;
              }

              object.resume();
            }
          }

          this._gameState = GameState.Ongoing;
        }

        update(deltaTime) {
          let curMousePos = (_crd && InputManager === void 0 ? (_reportPossibleCrUseOfInputManager({
            error: Error()
          }), InputManager) : InputManager).getInstance().mousePos;
          let mouseParam = {
            mousePos: curMousePos
          };
          let showTipObject = undefined; // 要显示提示的Object

          for (const tag in this._gameObjects) {
            const objectInTag = this._gameObjects[tag];

            for (let i = 0; i < objectInTag.length; i++) {
              let object = objectInTag[i];
              const isMouseIn = object.contains(curMousePos);

              let lastDetectIndex = this._curDetectObjects.findIndex(item => {
                if (object.getObjectInfo().id == item.getObjectInfo().id) {
                  return true;
                }

                return false;
              });

              if (isMouseIn) {
                showTipObject = object;

                if (lastDetectIndex >= 0) {} else {
                  object.onMouseEnterSpace(mouseParam);

                  this._curDetectObjects.push(object);
                }
              } else {
                if (lastDetectIndex >= 0) {
                  object.onMouseLeaveSpace(mouseParam);

                  this._curDetectObjects.splice(lastDetectIndex, 1);
                } else {}
              }
            }
          }

          if (showTipObject) {
            let objectInfo = showTipObject.getObjectInfo();
            (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
              error: Error()
            }), GameTipManager) : GameTipManager).getInstance().showTip(objectInfo.id, objectInfo.name, objectInfo.tipData);
            (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
              error: Error()
            }), GameTipManager) : GameTipManager).getInstance().moveTip(curMousePos);
          } else {
            (_crd && GameTipManager === void 0 ? (_reportPossibleCrUseOfGameTipManager({
              error: Error()
            }), GameTipManager) : GameTipManager).getInstance().hideTip();
          }
        }

        addObject(object, visualTag) {
          this._gameObjects[visualTag].push(object);
        }

        removeObject(object) {//this._gameObjects.
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60de683fec1dbfd9ba5b1e44cf13dea789008762.js.map