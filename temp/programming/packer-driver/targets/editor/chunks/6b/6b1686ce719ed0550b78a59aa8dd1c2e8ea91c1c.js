System.register(["__unresolved_0", "cc", "cc/env", "ComButton", "ComButtonEnum", "ComScrollContent", "ComScrollContent2", "ComScrollEnum", "ComScrollView", "GlobalHelper", "Singleton", "TextureManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Layers, Mask, Node, ScrollView, Sprite, UIOpacity, UITransform, PREVIEW, ComButton, ComButtonEnum, ComScrollContent, ComScrollContent2, ComScrollEnum, ComScrollView, CusMaterial, GroupLayer, Singleton, TextureManager, ComponentHelper, _crd;

  function _reportPossibleCrUseOfComButton(extras) {
    _reporterNs.report("ComButton", "ComButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComButtonEnum(extras) {
    _reporterNs.report("ComButtonEnum", "ComButtonEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComScrollContent(extras) {
    _reporterNs.report("ComScrollContent", "ComScrollContent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComScrollContent2(extras) {
    _reporterNs.report("ComScrollContent2", "ComScrollContent2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComScrollEnum(extras) {
    _reporterNs.report("ComScrollEnum", "ComScrollEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComScrollView(extras) {
    _reporterNs.report("ComScrollView", "ComScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCusMaterial(extras) {
    _reporterNs.report("CusMaterial", "GlobalHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupLayer(extras) {
    _reporterNs.report("GroupLayer", "GlobalHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextureManager(extras) {
    _reporterNs.report("TextureManager", "TextureManager", _context.meta, extras);
  }

  _export("ComponentHelper", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Layers = _cc.Layers;
      Mask = _cc.Mask;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_ComButton) {
      ComButton = _ComButton.ComButton;
    }, function (_ComButtonEnum) {
      ComButtonEnum = _ComButtonEnum.ComButtonEnum;
    }, function (_ComScrollContent) {
      ComScrollContent = _ComScrollContent.ComScrollContent;
    }, function (_ComScrollContent2) {
      ComScrollContent2 = _ComScrollContent2.ComScrollContent2;
    }, function (_ComScrollEnum) {
      ComScrollEnum = _ComScrollEnum.ComScrollEnum;
    }, function (_ComScrollView) {
      ComScrollView = _ComScrollView.ComScrollView;
    }, function (_GlobalHelper) {
      CusMaterial = _GlobalHelper.CusMaterial;
      GroupLayer = _GlobalHelper.GroupLayer;
    }, function (_Singleton) {
      Singleton = _Singleton.Singleton;
    }, function (_TextureManager) {
      TextureManager = _TextureManager.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e81aTJ8ZVAUJBmjquPDowy", "ComponentHelper", undefined); /// 组件相关的操作 比如生成 部分方法只是过渡方案 请谨慎使用


      __checkObsolete__(['Color', 'computeRatioByType', 'Label', 'Layers', 'log', 'Mask', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UIOpacity', 'UITransform', 'Vec3']);

      //#region 接口

      /** 自定义滚动容器 */

      /** 自定义按钮 */
      //#endregion
      _export("ComponentHelper", ComponentHelper = class ComponentHelper extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        //#region 生成并返回指定组件方法

        /**
         * 生成并返回适用于Canvas的Node节点
         * @param name 
         * @param width
         * @param height
         * @param anchorX
         * @param anchorY
         * @returns 
         */
        newUINode(name = "UINode", width = 100, height = 100, anchorX = 0.5, anchorY = 0.5) {
          let node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          let uiTransformComp = node.addComponent(UITransform);
          uiTransformComp.width = width;
          uiTransformComp.height = height;
          uiTransformComp.anchorX = anchorX;
          uiTransformComp.anchorY = anchorY;
          return node;
        }
        /**
         * 生成并返回Sprite组件
         * @param name 节点名
         * @param opacity 透明度 默认为255
         * @returns 
         */


        newSprite(name = "Sprite", opacity) {
          let node = this.newUINode(name);
          node.layer = Layers.Enum.UI_2D;
          let sprite = node.addComponent(Sprite);

          if (opacity != undefined) {
            this.setSpriteOpacity(sprite, opacity);
          }

          return sprite;
        }
        /**
         * 生成并返回3d版本Sprite组件 待完善
         * @param name 
         * @returns 
         */


        new3dSprite(name = "3dSprite") {
          let node = new Node(name);
          node.layer = (_crd && GroupLayer === void 0 ? (_reportPossibleCrUseOfGroupLayer({
            error: Error()
          }), GroupLayer) : GroupLayer).SCENE3D; // 不知道具体作用
          // node.layer = Layers.Enum.UI_3D

          node.addComponent(UITransform);
          let sprite = node.addComponent(Sprite);
          let material = sprite.getMaterial(0);

          if (material) {
            material.destroy();
          }

          material = (_crd && TextureManager === void 0 ? (_reportPossibleCrUseOfTextureManager({
            error: Error()
          }), TextureManager) : TextureManager).getMaterialByUrl((_crd && CusMaterial === void 0 ? (_reportPossibleCrUseOfCusMaterial({
            error: Error()
          }), CusMaterial) : CusMaterial).SPRITE); // 不知道具体作用

          sprite.setMaterial(material, 0);
          return sprite;
        }
        /**
         * 警告：该方法已被遗弃，并将于未来被删除 生成并返回ComScrollView组件 这只是一个过渡处理方案 建议直接在节点中添加该组件并设置属性
         * @param param 
         * 
         * @returns 
         */


        newComScrollView(param) {
          let width = param.width || 500;
          let height = param.height || 500; // ScrollView节点

          let node = this.newUINode("ScrollView", width, height);
          let scrollViewComp = node.addComponent(ScrollView);
          let comScrollViewComp = node.addComponent(_crd && ComScrollView === void 0 ? (_reportPossibleCrUseOfComScrollView({
            error: Error()
          }), ComScrollView) : ComScrollView);
          comScrollViewComp.allowUnlimitedItemSize = param.allowUnlimitedItemSize; // View节点

          let nodeView = this.newUINode("View", width, height);
          node.addChild(nodeView);
          nodeView.addComponent(Mask); // Content节点

          let content = this.newUINode("content", width, height);
          nodeView.addChild(content);
          let comScrollContentComp;

          if (param.allowUnlimitedItemSize) {
            comScrollContentComp = content.addComponent(_crd && ComScrollContent2 === void 0 ? (_reportPossibleCrUseOfComScrollContent2({
              error: Error()
            }), ComScrollContent2) : ComScrollContent2);
          } else {
            comScrollContentComp = content.addComponent(_crd && ComScrollContent === void 0 ? (_reportPossibleCrUseOfComScrollContent({
              error: Error()
            }), ComScrollContent) : ComScrollContent);
          }

          if (param.maxCount != undefined) {
            comScrollContentComp.setMaxCount(param.maxCount);
          } // 初始化数据


          scrollViewComp.content = content;
          comScrollViewComp.init();
          comScrollViewComp.setAllowDropToOutside(param.allowDropToOutside);

          if (param.allowScroll != undefined) {
            comScrollViewComp.setCanScroll(param.allowScroll);
          }

          if (param.mode != undefined) {
            if (param.mode == (_crd && ComScrollEnum === void 0 ? (_reportPossibleCrUseOfComScrollEnum({
              error: Error()
            }), ComScrollEnum) : ComScrollEnum).Mode.GRID && param.allowUnlimitedItemSize) {
              comScrollViewComp.setMode((_crd && ComScrollEnum === void 0 ? (_reportPossibleCrUseOfComScrollEnum({
                error: Error()
              }), ComScrollEnum) : ComScrollEnum).Mode.VERTICAL);
            } else {
              comScrollViewComp.setMode(param.mode);
            }
          }

          if (!param.allowUnlimitedItemSize) {
            comScrollContentComp.setPreItemSize(param.itemWidth, param.itemHeight);
          }

          if (param.prefab || param.className || param.cls) {
            comScrollViewComp.setPreItem(param.prefab, param.className, param.cls);
          }

          if (param.itemPadding) {
            comScrollContentComp.paddingTop = param.itemPadding[0] || 0;
            comScrollContentComp.paddingBottom = param.itemPadding[1] || 0;
            comScrollContentComp.paddingLeft = param.itemPadding[2] || 0;
            comScrollContentComp.paddingRight = param.itemPadding[3] || 0;
          }

          comScrollContentComp.spacingX = param.spacingX || 0;
          comScrollContentComp.spacingY = param.spacingY || 0;
          return comScrollViewComp;
        }
        /**
         * 生成并返回Label 这这是一个过渡方案 后续看看有没有必要保留该方法
         * @param name 
         * @param fontSize 
         * @param color 
         * @returns 
         */


        newLabel(name = "Label", param) {
          let node = this.newUINode(name);
          let label = node.addComponent(Label);

          if (param) {
            if (param.fontSize != undefined) {
              label.fontSize = param.fontSize;

              if (param && param.useDefaultFnt) {
                label.lineHeight = param.fontSize + 6;
              } else {
                label.lineHeight = param.fontSize + 4;
              }
            }

            if (param.color) {
              label.color = param.color;
            }

            if (param.useDefaultFnt) {
              label.font = (_crd && TextureManager === void 0 ? (_reportPossibleCrUseOfTextureManager({
                error: Error()
              }), TextureManager) : TextureManager).getDefaultBMPFont();
              label.spacingX = 5;
            } else if (param.useDefaultTtf) {
              label.font = (_crd && TextureManager === void 0 ? (_reportPossibleCrUseOfTextureManager({
                error: Error()
              }), TextureManager) : TextureManager).getTTFont();
            }
          }

          return label;
        }
        /**
         * 生成并返回ComButton组件 这只是一个过渡处理方案 建议直接在节点中添加该组件并设置属性
         * @param param 
         * @returns 
         */


        newComButton(param) {
          let node = param.node;

          if (!node) {
            console.error("newComButton执行失败 待绑定节点为空");
            return;
          } // 该组件需要UITransform组件支持 故需要判断节点上是否有 没有则主动创建


          if (!node.getComponent(UITransform)) {
            if (PREVIEW) {
              console.log(`节点(${node.name})上不存在UITransform组件 为其主动挂上`);
            }

            node.addComponent(UITransform);
          } // 是否是新创建的组件 如果通过代码形式创建ComButton 则默认无transition


          let isNewComp = false;
          let comp = node.getComponent(_crd && ComButton === void 0 ? (_reportPossibleCrUseOfComButton({
            error: Error()
          }), ComButton) : ComButton);

          if (!comp) {
            isNewComp = true;
            comp = node.addComponent(_crd && ComButton === void 0 ? (_reportPossibleCrUseOfComButton({
              error: Error()
            }), ComButton) : ComButton);
          }

          if (param.param) {
            comp.init(param.param);
          } else if (isNewComp) {
            comp.transition = (_crd && ComButtonEnum === void 0 ? (_reportPossibleCrUseOfComButtonEnum({
              error: Error()
            }), ComButtonEnum) : ComButtonEnum).Transition.NONE;
          }

          comp.addClickFunc(param.clickFunc);
          return comp;
        } //#endregion
        //#region 设组件透明度

        /**
         * 设置节点的透明度
         * @param node 
         * @param opacity 
         * @returns 
         */


        setNodeOpactiy(node, opacity) {
          if (!node) {
            console.warn("setNodeOpactiy FAIL node unvalid");
            return;
          } // 编辑器下对部分组件不生效（如skeleton组件）


          let opacityComp = node.getComponent(UIOpacity);

          if (!opacityComp) {
            if (opacity == 255) {
              return;
            }

            opacityComp = node.addComponent(UIOpacity);
          }

          opacityComp.opacity = opacity;
        }
        /**
         * 设置Sprite组件的透明度
         * @param sprite 
         * @param opacity 
         */


        setSpriteOpacity(sprite, opacity) {
          let color = sprite.color;
          color.set(color.r, color.g, color.b, opacity);
        }
        /**
         * 设置按钮是否可以交互
         * @param target 
         * @param val 
         */


        setButtonEnable(target, val) {
          let combutton = target.getComponent(_crd && ComButton === void 0 ? (_reportPossibleCrUseOfComButton({
            error: Error()
          }), ComButton) : ComButton);

          if (combutton) {
            combutton.interactable = val;
          }
        } //#endregion


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b1686ce719ed0550b78a59aa8dd1c2e8ea91c1c.js.map