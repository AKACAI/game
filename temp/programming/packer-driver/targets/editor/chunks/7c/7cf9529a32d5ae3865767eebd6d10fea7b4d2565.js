System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _dec, _class, _crd, ccclass, GameState, GameManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf877HzhklPnI0CfASCRuq4", "GameManager", undefined);

      ({
        ccclass
      } = _decorator);

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["NotInGame"] = 0] = "NotInGame";
        GameState[GameState["Pause"] = 1] = "Pause";
        GameState[GameState["Ongoing"] = 2] = "Ongoing";
        return GameState;
      }(GameState || {});

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Singleton {
        // 应该引入一个ObjectManager的东西
        // private _gameObjects: ObjectBase[][];   // 物体的输入有优先级的区分，0级为最优先，依次递减
        // 当前鼠标检测到的物体
        init() {
          this._gameState = GameState.Ongoing;
          this._gameRoot = director.getScene().getChildByName("main_canvas").getChildByName("game_root");
          this._gameObjects = [];
          this._objectFactory = ObjectFactory.getInstance();

          this._objectFactory.init();

          this._inputMgr = InputManager.getInstance();

          this._inputMgr.init();

          this._gameTipMgr = GameTipManager.getInstance();

          this._gameTipMgr.init();

          this._mapMgr = MapManager.getInstance();

          this._mapMgr.init();

          this._mapMgr.enterMap("100001");

          console.log("GameManager初始化完成!");
        }

        get gameState() {
          return this._gameState;
        }

        get gameRoot() {
          return this._gameRoot;
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
            let curMousePos = this._inputMgr.mousePos;
            let param = {
              mousePos: curMousePos
            }; // 应该改成鼠标坐标变化时调用，而不是每一帧都调用

            let hasShowTip = false;

            for (let i = 0; i < this._gameObjects.length; i++) {
              let object = this._gameObjects[i]; // console.log(object.contains(curMousePos))

              if (object.contains(curMousePos)) {
                if (object != this._curDetectObject) {
                  this._curDetectObject = object;

                  this._gameTipMgr.showTip(object.getObjectParam().name, object.getTipData());

                  this._gameTipMgr.moveTip(curMousePos);

                  object.mouseOnObject(true, param);
                } else {
                  this._gameTipMgr.moveTip(curMousePos);
                }

                hasShowTip = true;
                break;
              }
            } // 在不需要显示提示并且上一帧有检测到物体（说明现在没检测到


            if (!hasShowTip && this._curDetectObject) {
              this._gameTipMgr.hideTip();

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
//# sourceMappingURL=7cf9529a32d5ae3865767eebd6d10fea7b4d2565.js.map