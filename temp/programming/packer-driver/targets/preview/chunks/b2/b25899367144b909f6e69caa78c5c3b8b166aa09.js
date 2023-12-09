System.register(["__unresolved_0", "cc", "LogManager", "ResManager", "Singleton"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LogManager, ResManager, LoadType, Singleton, _decorator, MapData, _crd, ccclass, property;

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "LogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_LogManager) {
      LogManager = _LogManager.default;
    }, function (_ResManager) {
      ResManager = _ResManager.ResManager;
      LoadType = _ResManager.LoadType;
    }, function (_Singleton) {
      Singleton = _Singleton.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebed7BpUpNHZYqMzHpBLPDF", "MapData", undefined);

      __checkObsolete__(['_decorator', 'JsonAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapData = class MapData extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.inited = false;
        }

        init() {
          this.mapDatas = {};
          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadBundle("map", () => {
            this.inited = true;
          });
        }

        loadMapData(mapName) {
          if (this.mapDatas[mapName]) {
            return;
          }

          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset(mapName, (_crd && LoadType === void 0 ? (_reportPossibleCrUseOfLoadType({
            error: Error()
          }), LoadType) : LoadType).JSON, "map", json => {
            var mapData = json.json;
            this.mapDatas[mapName] = mapData;
          }, err => {
            (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
              error: Error()
            }), LogManager) : LogManager).error(err);
          });
        }

        getMapData(mapName) {
          if (!this.inited) {
            (_crd && LogManager === void 0 ? (_reportPossibleCrUseOfLogManager({
              error: Error()
            }), LogManager) : LogManager).warn("MapManager未初始化完成");
          }

          this.loadMapData(mapName);
          return this.mapDatas[mapName];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b25899367144b909f6e69caa78c5c3b8b166aa09.js.map