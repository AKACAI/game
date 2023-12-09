System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, error, Prefab, SpriteFrame, SpriteAtlas, sp, TTFFont, ParticleAsset, Font, JsonAsset, Material, Texture2D, TextureCube, AnimationClip, Mesh, Singleton, ResManager, LoadHelper, _crd, CustomType2assetTypeDic, LoadType;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../common/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPreInit(extras) {
    _reporterNs.report("IPreInit", "../common/IPreInit", _context.meta, extras);
  }

  _export("ResManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      error = _cc.error;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      SpriteAtlas = _cc.SpriteAtlas;
      sp = _cc.sp;
      TTFFont = _cc.TTFFont;
      ParticleAsset = _cc.ParticleAsset;
      Font = _cc.Font;
      JsonAsset = _cc.JsonAsset;
      Material = _cc.Material;
      Texture2D = _cc.Texture2D;
      TextureCube = _cc.TextureCube;
      AnimationClip = _cc.AnimationClip;
      Mesh = _cc.Mesh;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99825GmWoFPhZhutsaFtaTO", "ResManager", undefined);

      __checkObsolete__(['AssetManager', 'assetManager', 'error', 'Prefab', 'SpriteFrame', 'SpriteAtlas', 'sp', 'TTFFont', 'ParticleAsset', 'Font', 'JsonAsset', 'Material', 'Texture2D', 'TextureCube', 'AnimationClip', 'Mesh', 'Asset']);

      _export("ResManager", ResManager = class ResManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          // TODO 缓存管理
          this.name2Bundle = undefined;
        }

        init() {
          this.name2Bundle = new Map();

          if (this.nextInitManager) {
            this.nextInitManager.init();
          }
        }

        setNextInitManager(nextInitManager) {
          this.nextInitManager = nextInitManager;
        }

        loadBundle(bundleName, successCb, target) {
          if (this.name2Bundle.has(bundleName)) {
            var _bundle = this.name2Bundle[bundleName];

            if (successCb) {
              successCb.apply(target, [_bundle, target]);
            }

            return;
          }

          LoadHelper.loadBundle(bundleName, bundle => {
            if (bundle) {
              this.name2Bundle[bundleName] = bundle;

              if (successCb) {
                console.log("成功加载bundle包：", bundleName);
                successCb.apply(target, [bundle, target]);
              }
            }
          }, err => {
            console.log("加载bundle失败，bundle名为：", bundleName);
          }, this);
        }

        releaseBundle(bundleName) {
          this.name2Bundle.delete(bundleName);
          LoadHelper.releaseBundle(bundleName);
        }
        /**资源加载*/


        loadAsset(path, type, bundleName, successCb, failCb, target) {
          // if (!this.name2Bundle.has(bundleName)) {
          //     console.error(`bundle包未加载,加载的资源路径为：${path},bandle包为:${bundleName}`);
          //     return;
          // }
          var loadTask = {
            resPath: path,
            resType: type,
            bundleName: bundleName,
            failCb: failCb,
            successCb: successCb,
            target: target
          };
          LoadHelper.loadAsset(loadTask);
        }

      });

      LoadHelper = class LoadHelper {
        static loadBundle(bundleName, successCb, failCb, target) {
          assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
              if (failCb) {
                failCb.apply(target, [err, target]);
              }
            } else {
              if (successCb) {
                successCb.apply(target, [bundle, target]);
              }
            }
          });
        }

        static releaseBundle(bundleName) {
          var bundle = assetManager.getBundle(bundleName);
          bundle.releaseAll();
          assetManager.removeBundle(bundle);
        }

        static loadAsset(params) {
          if (params.resPath == null || params.resPath == "") {
            error("load path is empty");
            return;
          } // 直接介入


          var resType;

          switch (params.resType) {
            case LoadType.PrefableRes:
              resType = Prefab;
              break;

            case LoadType.NormalImg:
              resType = SpriteFrame;
              break;

            case LoadType.PLIST:
              resType = SpriteAtlas;
              break;

            case LoadType.SPINE:
              resType = sp.SkeletonData;
              break;

            case LoadType.TTFONT:
              resType = TTFFont;
              break;

            case LoadType.PARTICLE:
              resType = ParticleAsset;
              break;

            case LoadType.FONT:
              resType = Font;
              break;

            case LoadType.JSON:
              resType = JsonAsset;
              break;

            case LoadType.Material:
              resType = Material;
              break;

            case LoadType.Texture:
              resType = Texture2D;
              break;

            case LoadType.TextureCube:
              resType = TextureCube;
              break;

            case LoadType.AnimationClip:
              resType = AnimationClip;
              break;

            case LoadType.MESH:
              resType = Mesh;
              break;
          }

          if (!resType) {
            console.error("未知的加载类型", resType);
            return;
          }

          assetManager.loadAny({
            path: params.resPath,
            type: resType,
            bundle: params.bundleName
          }, {
            priority: params.level
          }, (err, asset) => {
            if (err) {
              if (params.failCb) {
                params.failCb.apply(params.target, [err, params.target]);
              }
            } else {
              console.log("成功加载asset：", params.resPath);

              if (params.successCb) {
                params.successCb.apply(params.target, [asset, params.target]);
              }
            }
          });
        }

      };
      /**自定义类型到资源类型的转换 */

      _export("CustomType2assetTypeDic", CustomType2assetTypeDic = {
        1: Prefab,
        2: SpriteFrame,
        3: SpriteAtlas,
        4: sp.SkeletonData,
        5: TTFFont,
        6: ParticleAsset,
        7: Font,
        8: JsonAsset,
        9: Material,
        10: Texture2D,
        11: TextureCube,
        12: AnimationClip,
        13: Mesh
      });
      /**加载资源类型 */


      _export("LoadType", LoadType = /*#__PURE__*/function (LoadType) {
        LoadType[LoadType["PrefableRes"] = 1] = "PrefableRes";
        LoadType[LoadType["NormalImg"] = 2] = "NormalImg";
        LoadType[LoadType["PLIST"] = 3] = "PLIST";
        LoadType[LoadType["SPINE"] = 4] = "SPINE";
        LoadType[LoadType["TTFONT"] = 5] = "TTFONT";
        LoadType[LoadType["PARTICLE"] = 6] = "PARTICLE";
        LoadType[LoadType["FONT"] = 7] = "FONT";
        LoadType[LoadType["JSON"] = 8] = "JSON";
        LoadType[LoadType["Material"] = 9] = "Material";
        LoadType[LoadType["Texture"] = 10] = "Texture";
        LoadType[LoadType["TextureCube"] = 11] = "TextureCube";
        LoadType[LoadType["AnimationClip"] = 12] = "AnimationClip";
        LoadType[LoadType["MESH"] = 13] = "MESH";
        return LoadType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52f6f700cbdddf17518dadc2a04b1cf7c6d78de5.js.map