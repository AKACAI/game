System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Node, Size, UIOpacity, UITransform, ButtonEventType, ComButton, NodeHelper, _crd;

  function _reportPossibleCrUseOfButtonEventType(extras) {
    _reporterNs.report("ButtonEventType", "../manager/ui_manager/component/ComButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComButton(extras) {
    _reporterNs.report("ComButton", "../manager/ui_manager/component/ComButton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Node = _cc.Node;
      Size = _cc.Size;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ButtonEventType = _unresolved_2.ButtonEventType;
      ComButton = _unresolved_2.ComButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c395aFA47BHoKBQ/up6y46Q", "NodeHelper", undefined);

      __checkObsolete__(['Button', 'Node', 'Size', 'Sprite', 'UIOpacity', 'UITransform']);

      // declare function require(path: string): any;
      // 客户端布局等管理
      _export("default", NodeHelper = class NodeHelper {
        static setPosX(node, posX) {
          node.setPosition(posX, node.position.y, node.position.z);
        }

        static setPosY(node, posY) {
          node.setPosition(node.position.x, posY, node.position.z);
        }

        static setPosZ(node, posZ) {
          node.setPosition(node.position.x, node.position.y, posZ);
        }

        static setScaleX(node, scaleX) {
          node.setScale(scaleX, node.scale.y, node.scale.z);
        }

        static setScaleY(node, scaleY) {
          node.setScale(node.scale.x, scaleY, node.scale.z);
        }

        static setScaleZ(node, scaleZ) {
          node.setScale(node.scale.x, node.scale.y, scaleZ);
        }

        static setAnchorPoint(node, x, y) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(x, y);
        }

        static setAnchorPointX(node, x) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(x, node.getComponent(UITransform).anchorY);
        }

        static setAnchorPointY(node, y) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setAnchorPoint(node.getComponent(UITransform).anchorX, y);
        }

        static setContentSize(node, width, height) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(width, height);
        }
        /**获取对应节点的uiTransform的size 如果没有，返回一个全新的size 0 ,0 */


        static getContentSize(node) {
          if (node.getComponent(UITransform)) {
            return node.getComponent(UITransform).contentSize;
          } else {
            return new Size(0, 0);
          }
        }

        static setContentWidth(node, width) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(width, node.getComponent(UITransform).height);
        }

        static setContentHeight(node, height) {
          node.getComponent(UITransform) && node.getComponent(UITransform).setContentSize(node.getComponent(UITransform).width, height);
        }

        static setOpacity(node, opacity) {
          let comp = node.getComponent(UIOpacity);

          if (!comp) {
            comp = node.addComponent(UIOpacity);
          }

          comp.opacity = opacity;
        } // 创建新节点


        static newNode(name) {
          let node = new Node(name);
          node.addComponent(UITransform);
          node.addComponent(UIOpacity);
          return node;
        } // 创建新的带有Button组件的节点


        static newButton() {
          let node = new Node();
          node.addComponent(Button);
          node.addComponent(UITransform);
          node.addComponent(UIOpacity);
          return node;
        } // /**
        //  * 设置已经加载的spriteFrame（使用时要确认资源已经加载）
        //  * @param node 显示对象 或组件
        //  * @param path 要设置的资源
        //  * 
        //  */
        // static loadAndSetImage(node: Node | Sprite, path: string, bundleName: string): void {
        //     if (!node || !path) {
        //         return;
        //     }
        //     ResManager.getInstance().loadAsset(path, LoadType.Texture, bundleName, (asset) => {
        //         if (node instanceof Sprite) {
        //             node.spriteFrame = asset;
        //         } else if (node instanceof Node) {
        //             let s = node.getComponent(Sprite);
        //             if (s) {
        //                 s.spriteFrame = asset;
        //             } else {
        //                 s = node.addComponent(Sprite);
        //                 s.spriteFrame = asset;
        //             }
        //         }
        //     }, () => {
        //         console.warn("!!!setSpriteFrame!!!:", path);
        //     })
        // }

        /**
         * 
         * @param click_widget 点击的对象
         * @param click_func 触发的函数
         * @param target 目标（触发的函数回调的调用者）
         * @param extParams  额外参数
         */


        static setNodeClickEvent(click_node, click_func, target, extParams) {
          if (!click_node || !click_func) {
            return;
          }

          let btnCpt = click_node.getComponent(_crd && ComButton === void 0 ? (_reportPossibleCrUseOfComButton({
            error: Error()
          }), ComButton) : ComButton);

          if (!btnCpt) {
            btnCpt = click_node.addComponent(_crd && ComButton === void 0 ? (_reportPossibleCrUseOfComButton({
              error: Error()
            }), ComButton) : ComButton);
          }

          btnCpt.init();
          btnCpt.addEvent({
            type: (_crd && ButtonEventType === void 0 ? (_reportPossibleCrUseOfButtonEventType({
              error: Error()
            }), ButtonEventType) : ButtonEventType).click,
            func: click_func,
            target: target,
            params: extParams
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=476349d0f5964cf5e3103cc36a4a5e046fae8580.js.map