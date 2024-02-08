System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, InteractManager;

  function _reportPossibleCrUseOfObjectBase(extras) {
    _reporterNs.report("ObjectBase", "../../modules/game/ObjectBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseParam(extras) {
    _reporterNs.report("MouseParam", "../InputManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fad7BMHjxLLqKGxx2jfhCV", "InteractManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InteractManager", InteractManager = (_dec = ccclass('InteractManager'), _dec(_class = class InteractManager {
        /** 当前鼠标检测到的物体 */
        constructor(gameManager) {
          this._gameManager = undefined;
          this._gameManager = gameManager;
          this._curDetectObjects = [];
        }

        interactWithObject(object, mouseParam) {
          let interactSpace = object.getInteractSpace();

          if (interactSpace) {
            const isMouseIn = interactSpace.contains(mouseParam.mousePos);

            let lastDetectIndex = this._curDetectObjects.findIndex(item => {
              if (object.getObjectInfo().id == item.getObjectInfo().id) {
                return true;
              }

              return false;
            });

            if (isMouseIn) {
              if (lastDetectIndex >= 0) {} else {
                interactSpace.onMouseEnterSpace(mouseParam);

                this._curDetectObjects.push(object);
              }
            } else {
              if (lastDetectIndex >= 0) {
                interactSpace.onMouseLeaveSpace(mouseParam);

                this._curDetectObjects.splice(lastDetectIndex, 1);
              } else {}
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ced62d8a6370c4ccd2c72704ddb0ce8fa1cb9a3.js.map