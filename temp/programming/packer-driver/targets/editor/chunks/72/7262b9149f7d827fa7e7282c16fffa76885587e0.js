System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Singleton, ObjectFactory, Utils, GameManager, MapData, EventManager, EventConstants, ObjectVisualTag, _dec, _class, _crd, ccclass, property, MapManager;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectFactory(extras) {
    _reporterNs.report("ObjectFactory", "../../modules/game/ObjectFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../utils/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../game_manager/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapData(extras) {
    _reporterNs.report("MapData", "./MapData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIOpenObjectData(extras) {
    _reporterNs.report("IOpenObjectData", "./MapData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../../common/IPreInit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../event_manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstants(extras) {
    _reporterNs.report("EventConstants", "../event_manager/EventConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectVisualTag(extras) {
    _reporterNs.report("ObjectVisualTag", "../../modules/game/ObjectBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      ObjectFactory = _unresolved_3.ObjectFactory;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.default;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
    }, function (_unresolved_6) {
      MapData = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.default;
    }, function (_unresolved_8) {
      EventConstants = _unresolved_8.EventConstants;
    }, function (_unresolved_9) {
      ObjectVisualTag = _unresolved_9.ObjectVisualTag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94156FC1VdGrKJ4gU2D6sTy", "MapManager", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MapManager", MapManager = (_dec = ccclass('MapManager'), _dec(_class = class MapManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        init() {
          this.gameMgr = (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).getInstance();
          this.map_root = this.gameMgr.gameRoot.getChildByName("map_root");
          (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData).getInstance().init(() => {
            if (this.nextInitManager) {
              this.nextInitManager.init();
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatchEvent((_crd && EventConstants === void 0 ? (_reportPossibleCrUseOfEventConstants({
                error: Error()
              }), EventConstants) : EventConstants).GameControl.GameStart);
            }
          });
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
        }

        enterMap(mapName) {
          (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData).getInstance().loadMapData(mapName, mapData => {
            for (let i = 0; i < mapData.objectDatas.length; i++) {
              let data = mapData.objectDatas[i];
              let object = (_crd && ObjectFactory === void 0 ? (_reportPossibleCrUseOfObjectFactory({
                error: Error()
              }), ObjectFactory) : ObjectFactory).getInstance().getObject(data.objectType, data.objectId, data.shapeParam, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).str2vec3(data.pos), data.objectParam, data.physicsParam, this.map_root);
              this.gameMgr.addObject(object, (_crd && ObjectVisualTag === void 0 ? (_reportPossibleCrUseOfObjectVisualTag({
                error: Error()
              }), ObjectVisualTag) : ObjectVisualTag).front);
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7262b9149f7d827fa7e7282c16fffa76885587e0.js.map