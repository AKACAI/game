System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MScrollItem, _decorator, CCInteger, Component, Enum, instantiate, Mask, Node, Prefab, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, requireComponent, ScrollLayoutType, ScrollOrderType, MScrollView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMScrollItem(extras) {
    _reporterNs.report("MScrollItem", "./MScrollItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Enum = _cc.Enum;
      instantiate = _cc.instantiate;
      Mask = _cc.Mask;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      MScrollItem = _unresolved_2.MScrollItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f60dDRTPZPKZvF5frx8348", "MScrollView", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Enum', 'EventMouse', 'instantiate', 'Mask', 'Node', 'Prefab', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ScrollLayoutType", ScrollLayoutType = /*#__PURE__*/function (ScrollLayoutType) {
        ScrollLayoutType[ScrollLayoutType["Horizon"] = 1] = "Horizon";
        ScrollLayoutType[ScrollLayoutType["Verticle"] = 2] = "Verticle";
        return ScrollLayoutType;
      }({}));

      _export("ScrollOrderType", ScrollOrderType = /*#__PURE__*/function (ScrollOrderType) {
        ScrollOrderType[ScrollOrderType["Forward"] = 1] = "Forward";
        ScrollOrderType[ScrollOrderType["Reverse"] = 2] = "Reverse";
        return ScrollOrderType;
      }({}));

      _export("MScrollView", MScrollView = (_dec = ccclass('MScrollView'), _dec2 = requireComponent(Mask), _dec3 = property({
        type: Prefab,
        tooltip: "用于生成可展示内容的预制体引用"
      }), _dec4 = property({
        type: Enum(ScrollLayoutType),
        tooltip: "布局类型"
      }), _dec5 = property({
        type: Enum(ScrollLayoutType),
        tooltip: "排序类型"
      }), _dec6 = property({
        type: [CCInteger],
        tooltip: "item之间的间距"
      }), _dec7 = property({
        type: [CCInteger],
        tooltip: "与起始位置的间距"
      }), _dec8 = property({
        type: [CCInteger],
        tooltip: "与终止位置的间距"
      }), _dec(_class = _dec2(_class = (_class2 = class MScrollView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemPrefab", _descriptor, this);

          _initializerDefineProperty(this, "layoutType", _descriptor2, this);

          _initializerDefineProperty(this, "orderType", _descriptor3, this);

          _initializerDefineProperty(this, "spacing", _descriptor4, this);

          _initializerDefineProperty(this, "beginSpacing", _descriptor5, this);

          _initializerDefineProperty(this, "endSpacing", _descriptor6, this);
        }

        // 实例化的item
        // item的数据
        // 所有的item的总数
        // 所有的进度的长度
        // 进度为0时的坐标值，也就是左边界
        // 进度为1时的坐标值，也就是右边界
        // 当前的进度坐标
        // 可视区域长度
        // item的长度
        // 实例化的item的父节点
        init() {
          if (!this.itemPrefab) {
            console.error("请给滚动容器", this.node.name, "绑定item预制体！！！");
            return;
          }

          this.canScroll = false;
          this.contentNode = new Node("content");
          this.contentNode.parent = this.node;
          this.contentNode.setPosition(0, 0, 0);
          var transform = this.contentNode.addComponent(UITransform);
          var nodeTransform = this.node.getComponent(UITransform);
          transform.setAnchorPoint(nodeTransform.anchorPoint);
          transform.setContentSize(nodeTransform.contentSize);

          if (this.layoutType == ScrollLayoutType.Horizon) {
            var item = instantiate(this.itemPrefab);
            this.itemLength = item.getComponent(UITransform).contentSize.x;
            this.viewLength = transform.contentSize.x;
            item.destroy();
          } else {
            var _item = instantiate(this.itemPrefab);

            this.itemLength = _item.getComponent(UITransform).contentSize.y;
            this.viewLength = transform.contentSize.y;

            _item.destroy();
          }

          var count = Math.ceil((this.viewLength + this.spacing) / (this.spacing + this.itemLength));
          this.scrollItems = [];

          for (var i = 0; i < count; i++) {
            var node = instantiate(this.itemPrefab);
            node.parent = this.contentNode;
            node.active = false;
            var scrollItem = node.getComponent(_crd && MScrollItem === void 0 ? (_reportPossibleCrUseOfMScrollItem({
              error: Error()
            }), MScrollItem) : MScrollItem);
            scrollItem.init();
            this.scrollItems.push(scrollItem);
          }

          this.initFunc();
        }

        initFunc() {
          this.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        }

        setData(itemsData, canScroll) {
          if (!this.itemPrefab) {
            console.error("请给滚动容器", this.node.name, "绑定item预制体！！！");
            return;
          }

          this.canScroll = canScroll;
          this.itemsData = itemsData;
          this.allItemNum = this.itemsData.length;
          this.allProgressLength = this.beginSpacing + this.endSpacing + this.itemLength + (this.allItemNum - 1) * (this.itemLength + this.spacing);
          this.leftBorder = 0;
          this.rightBorder = this.allProgressLength - this.viewLength;

          if (this.itemsData.length >= this.scrollItems.length) {
            this.curProgressPos = 0;
            this.updateProgress(0);
          } else {
            this.curProgressPos = 0;

            if (this.layoutType == ScrollLayoutType.Horizon) {
              if (this.orderType == ScrollOrderType.Forward) {
                for (var i = 0; i < this.itemsData.length; i++) {
                  this.scrollItems[i].node.active = true;
                  this.scrollItems[i].node.setPosition(i * (this.itemLength + this.spacing) + this.itemLength / 2, 0, 0);
                  this.scrollItems[i].setData(this.itemsData[i]);
                }
              } // else if (this.orderType == ScrollOrderType.Reverse) {
              //     for (let i = 0; i < this.itemsData.length; i++) {
              //         this.scrollItems[i].node.active = true;
              //         this.scrollItems[i].node.setPosition(i * (this.itemLength + this.spacing) + this.itemLength / 2, 0, 0);
              //         this.scrollItems[i].setData(this.itemsData[i]);
              //     }
              // }

            } else if (this.layoutType == ScrollLayoutType.Verticle) {
              if (this.orderType == ScrollOrderType.Forward) {
                for (var _i = 0; _i < this.itemsData.length; _i++) {
                  this.scrollItems[_i].node.active = true;

                  this.scrollItems[_i].node.setPosition(0, -_i * (this.itemLength + this.spacing) + this.itemLength / 2, 0);

                  this.scrollItems[_i].setData(this.itemsData[_i]);
                }
              }
            }
          }
        }

        getItemPos(index) {
          if (index == 0) {
            if (this.layoutType == ScrollLayoutType.Verticle && this.orderType == ScrollOrderType.Forward) {
              return -this.beginSpacing - this.itemLength / 2;
            } else if (this.layoutType == ScrollLayoutType.Horizon && this.orderType == ScrollOrderType.Forward) {
              return this.beginSpacing + this.itemLength / 2;
            }
          } else {
            if (this.layoutType == ScrollLayoutType.Verticle && this.orderType == ScrollOrderType.Forward) {
              return this.getItemPos(index - 1) - this.itemLength - this.spacing;
            } else if (this.layoutType == ScrollLayoutType.Horizon && this.orderType == ScrollOrderType.Forward) {
              return this.getItemPos(index - 1) + this.itemLength + this.spacing;
            }
          }
        }

        updateProgress(deltaPos) {
          this.curProgressPos += deltaPos;

          if (this.curProgressPos > this.rightBorder) {
            this.curProgressPos = this.rightBorder;
          }

          if (this.curProgressPos < this.leftBorder) {
            this.curProgressPos = this.leftBorder;
          }

          var firstIndex = 0;
          var curItemPos = this.getItemPos(0);

          while (curItemPos + this.itemLength / 2 < this.curProgressPos) {
            firstIndex++;
            curItemPos += this.spacing + this.itemLength;
          }

          var firstPosX = curItemPos - this.curProgressPos; // 第一个在视窗里面的item的横坐标

          var showCount = Math.min(this.itemsData.length - firstIndex, this.scrollItems.length);

          if (this.layoutType == ScrollLayoutType.Horizon) {
            for (var i = 0; i < showCount; i++) {
              this.scrollItems[i].node.active = true;
              this.scrollItems[i].node.setPosition(firstPosX + i * (this.itemLength + this.spacing), 0, 0);
              this.scrollItems[i].setData(this.itemsData[firstIndex + i]);
            }
          } else if (this.layoutType == ScrollLayoutType.Verticle) {
            for (var _i2 = 0; _i2 < showCount; _i2++) {
              this.scrollItems[_i2].node.active = true;

              this.scrollItems[_i2].node.setPosition(0, firstPosX + _i2 * (this.itemLength + this.spacing), 0);

              this.scrollItems[_i2].setData(this.itemsData[firstIndex + _i2]);
            }
          }
        }

        onMouseWheel(event) {
          if (!this.canScroll) {
            return;
          }

          if (event.getScrollY() > 0) {
            this.updateProgress(-30);
          } else if (event.getScrollY() < 0) {
            this.updateProgress(30);
          }
        }

        dispose() {
          this.node.off(Node.EventType.MOUSE_WHEEL);

          for (var i = 0; i < this.scrollItems.length; i++) {
            this.scrollItems[i].dispose();
          }

          delete this.scrollItems;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScrollLayoutType.Verticle;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "orderType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScrollOrderType.Forward;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "beginSpacing", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "endSpacing", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f71bab15a028f43cd68fda0a27c9184cc0f6388.js.map