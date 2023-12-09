System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Singleton, LogManager, ResManager, LoadType, MapData, _crd, ccclass, property;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogManager(extras) {
    _reporterNs.report("LogManager", "../../utils/LogManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../ResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadType(extras) {
    _reporterNs.report("LoadType", "../ResManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      LogManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      ResManager = _unresolved_4.ResManager;
      LoadType = _unresolved_4.LoadType;
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
        constructor(...args) {
          super(...args);
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
            let mapData = json.json;
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
//# sourceMappingURL=ed3521838fe8aa04e4cbda2ec317aa980cfbc2d5.js.map