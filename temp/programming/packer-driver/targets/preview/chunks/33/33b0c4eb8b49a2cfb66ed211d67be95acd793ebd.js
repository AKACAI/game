System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Singleton, ObjectFactory, Utils, GameManager, MapData, _dec, _class, _crd, ccclass, property, MapManager;

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
        }

        enterMap(mapName) {
          var mapData = (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData).getInstance().getMapData(mapName);

          for (var i = 0; i < mapData.objectDatas.length; i++) {
            var data = mapData.objectDatas[i];
            var object = (_crd && ObjectFactory === void 0 ? (_reportPossibleCrUseOfObjectFactory({
              error: Error()
            }), ObjectFactory) : ObjectFactory).getInstance().getObject(data.objectType, data.shapeParam, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).str2vec3(data.pos), data.objectParam, this.map_root);
            this.gameMgr.addObject(object);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33b0c4eb8b49a2cfb66ed211d67be95acd793ebd.js.map