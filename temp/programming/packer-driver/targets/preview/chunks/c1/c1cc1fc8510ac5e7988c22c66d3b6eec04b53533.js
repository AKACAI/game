System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Node, Size, Sprite, UIOpacity, UITransform, ResManager, Display, _crd;

  function _reportPossibleCrUseOfResManager(extras) {
    _reporterNs.report("ResManager", "../manager/ResManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ResManager = _unresolved_2.ResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c395aFA47BHoKBQ/up6y46Q", "Display", undefined);

      __checkObsolete__(['Button', 'Node', 'Size', 'Sprite', 'UIOpacity', 'UITransform']);

      // declare function require(path: string): any;
      // 客户端布局等管理
      _export("default", Display = class Display {
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
          var comp = node.getComponent(UIOpacity);

          if (!comp) {
            comp = node.addComponent(UIOpacity);
          }

          comp.opacity = opacity;
        } // 创建新节点


        static newNode(name) {
          var node = new Node(name);
          node.addComponent(UITransform);
          node.addComponent(UIOpacity);
          return node;
        } // 创建新的带有Button组件的节点


        static newButton() {
          var node = new Node();
          node.addComponent(Button);
          node.addComponent(UITransform);
          node.addComponent(UIOpacity);
          return node;
        }
        /**
         * 设置已经加载的spriteFrame（使用时要确认资源已经加载）
         * @param node 显示对象 或组件
         * @param path 要设置的资源
         * 
         */


        static setSpriteFrame(node, path, bundleName) {
          if (!node || !path) {
            return;
          }

          (_crd && ResManager === void 0 ? (_reportPossibleCrUseOfResManager({
            error: Error()
          }), ResManager) : ResManager).getInstance().loadAsset();
          var frame = TextureManager.getSpriteFrameFromCache(path);

          if (frame) {
            if (node instanceof Sprite) {
              node.spriteFrame = frame;
            } else if (node instanceof Node) {
              var s = node.getComponent(Sprite);

              if (s) {
                s.spriteFrame = frame;
              } else {
                s = node.addComponent(Sprite);
                s.spriteFrame = frame;
              }
            }
          } else {
            console.warn("!!!setSpriteFrame!!!:", path);
          }
        }
        /**
         * 加载并设置图片，当节点销毁时会释放资源
         * (如果节点不销毁，需要手动释放资源，用Display.unloadImage方法释放)
         * @param node 节点或者Sprite组件
         * @param path 资源路径 
         * @param tCallback 回调函数，可传null
         * @param targetObj 调用者，可传null
         * @param isAutoReleaseImage 当节点销毁时释放资源，true释放（默认）,false:不释放
         * @param lev 加载优先级 默认0
         */


        static loadAndSetImage(obj, path, tCallback, targetObj, isAutoReleaseImage, lev, bundleName) {
          if (tCallback === void 0) {
            tCallback = null;
          }

          if (targetObj === void 0) {
            targetObj = null;
          }

          if (isAutoReleaseImage === void 0) {
            isAutoReleaseImage = true;
          }

          if (lev === void 0) {
            lev = 0;
          }

          if (bundleName === void 0) {
            bundleName = BundleName.Resources;
          }

          if (!obj) {
            return false;
          }

          var node;

          if (obj instanceof Sprite) {
            node = obj.node;
          } else {
            node = obj;
          }

          var comp = node.getComponent(LoadAndSetImageComponent);

          if (!comp) {
            comp = node.addComponent(LoadAndSetImageComponent);
          }

          comp.setResPath(path, tCallback, targetObj, isAutoReleaseImage, lev, bundleName);
          return true;
        }
        /**
         * 释放资源资源
         * 注：只释放loadAndSetImage加载的资源） */


        static unloadImage(obj, path) {
          var node;

          if (!obj) {
            return;
          }

          if (obj instanceof Sprite) {
            node = obj.node;
          } else {
            node = obj;
          }

          var comp = node.getComponent(LoadAndSetImageComponent);

          if (comp) {
            comp.unLoadRes();
          }
        }
        /**
         * 
         * @param click_widget 点击的对象
         * @param click_func 触发的函数
         * @param target 目标（触发的函数回调的调用者）
         * @param extParams  额外参数
         */


        static setClickEventByType(click_widget, click_func, target, extParams) {
          var f = event => {
            if (target) {
              click_func.call(target, click_widget, event);
            } else {
              click_func(click_widget, event);
            }
          };

          ComponentHelper.getInstance().newComButton({
            node: click_widget,
            clickFunc: f,
            param: extParams
          });
        }

        static removeComAllClickFunc(click_widget) {
          var combutton = click_widget.getComponent(ComButton);

          if (combutton) {
            combutton.removeAllClickFunc();
          }
        }
        /**移除按钮中的事件并且移除点击按钮组件 */


        static removeComAllClickFuncAndComButton(click_widget) {
          var combutton = click_widget.getComponent(ComButton);

          if (combutton) {
            combutton.removeAllClickFunc();
            combutton.destroy();
          }
        } // 设置资产图片


        static setAssetImg(img, base_id) {
          if (base_id < 10000) {
            base_id = 10000;
            LogManager.debugLog("base_id must be bigger than 10000");
          }

          Display.setSpriteFrame(img, js.formatStr("img_asset_%s", base_id));
        }
        /**
         * 目标椭圆旋转
         * @param target 旋转目标
         * @param pos 椭圆中心
         * @param radiusA 椭圆长半轴
         * @param radiusB 椭圆短半轴
         * @param speed 每秒旋转的度数
         * @param isCounterclockwise 是否逆时针旋转
         * @param token 标识
         * @param angle 初始角度
         * @param isCheckZ 检测层次
         * @param loops旋转圈数
         * @param cbData旋转完成回调
         */


        static playEllipseAction(target, pos, radiusA, radiusB, speed, isCounterclockwise, token, angle, isCheckZ, loops, cbData) {
          TimerManager.removeTimerWithToken(token);
          angle = angle ? angle : 0;
          var time = 10;
          speed = speed * time / 1000; // 圈数

          loops = loops ? loops : 0;
          var baseAngle = 0;
          var count = 0;
          TimerManager.addTimer(10, function () {
            if (isCounterclockwise == true) {
              angle = angle + speed;

              if (angle >= 360) {
                angle = 0;
              }
            } else {
              angle = angle - speed;

              if (angle <= 0) {
                angle = 360;
              }
            }

            if (isCheckZ) {
              if (angle > 40 && angle < 140) {
                target.setPosition(v3(target.getPosition().x, target.getPosition().y, 0));
              } else {
                target.setPosition(v3(target.getPosition().x, target.getPosition().y, 1));
              }
            }

            if (loops > 0) {
              baseAngle = baseAngle + speed;

              if (baseAngle >= 360) {
                baseAngle = baseAngle - 360;
                count = count + 1;

                if (count >= loops) {
                  TimerManager.removeTimerWithToken(token);

                  if (cbData) {
                    cbData.execute();
                  }
                }
              }
            }

            var x = radiusA * Math.cos(Display.angle2radian(angle)) + pos.x;
            var y = radiusB * Math.sin(Display.angle2radian(angle)) + pos.y;
            target.setPosition(x, y);
          }, target, true, null, token);
        }
        /**
         * 角度转成弧度
         * @param angle 角度
         */


        static angle2radian(angle) {
          return angle * (Math.PI / 180);
        }
        /**
         * 创建显示对象并赋资源 (不会加载资源)
         * @param img_path 资源路径
         */


        static newImage(img_path, nodeNmae) {
          nodeNmae = nodeNmae || "imgNode";
          var imgNode = new Node(nodeNmae);
          var cachedFrame = TextureManager.getSpriteFrameFromCache(img_path);
          var sprite = imgNode.addComponent(Sprite);

          if (cachedFrame) {
            if (imgNode && imgNode.isValid) {
              sprite.spriteFrame = cachedFrame;
            }
          } else {
            console.error("!!内存里没有这个资源!! ", img_path);
          }

          return imgNode;
        }
        /**
         * 创见显示对象并设置粒子效果
         * @param particlePath 粒子效果路径
         */


        static newParticle(particlePath, bundleName) {
          if (bundleName === void 0) {
            bundleName = BundleName.particle;
          }

          var particleNode = Display.newNode("particle");
          var particleComp = particleNode.addComponent(ParticleSystem2D);
          particleComp.playOnLoad = true;
          var partileFile = TextureManager.getParticleByUrl(particlePath, bundleName);

          if (partileFile) {
            particleComp.file = partileFile;
          }

          return particleNode;
        }
        /**
         * 创建新的带颜色的层
         * @param color 颜色
         */


        static newColorLayer(color, size) {
          var node = Display.newSprite();
          node.getComponent(Sprite).color = color;
          Display.setSpriteFrame(node, "img_white");
          node.getComponent(UITransform).setContentSize(size); // let node_ctx = node.addComponent(Graphics);//有Sprite不能再加Graphics
          // node_ctx.rect(0, 0, size.width, size.height);
          // node_ctx.fillColor = color
          // node_ctx.fill();

          return node;
        }
        /**
         * 实例化prefab
         * @param prefabPath
         */


        static instantiatePrefab(prefabPath, bundleName) {
          if (bundleName === void 0) {
            bundleName = BundleName.Resources;
          }

          var prefabAsset = TextureManager.getPrefabByUrl(prefabPath, bundleName);
          var prefabNode;

          if (prefabAsset) {
            prefabNode = instantiate(prefabAsset);
          } else {
            console.error("缓存中没有找到这个prefab资源!! ", bundleName, prefabPath);
          }

          AutoPrefabI18nMgr.transLabel(prefabPath, prefabNode);
          return prefabNode;
        }
        /**
         * 把传入的节点添加一层灰色（非滤镜方案，需要滤镜的调用filterGrey）
         * @param node
         * @param isGrey 
         * @param rate 
         */


        static colorGrey(node, isGrey, rate) {
          if (!node || !node.isValid || !node.getComponent(Sprite)) {
            return;
          }

          if (isGrey) {
            if (rate) {
              rate = Math.max(rate, 0);
              rate = Math.min(rate, 1);
              rate = 1 - rate;
              node.getComponent(Sprite).color = new Color(255 * rate, 255 * rate, 255 * rate);
            } else {
              node.getComponent(Sprite).color = new Color(150, 150, 150);
            }
          } else {
            node.getComponent(Sprite).color = Color.WHITE;
          }
        } // static playClickSound(soundId?) {
        //     if (soundId && soundId <= 0) {
        //         return
        //     }
        //     if (SoundManager.isInit) {
        //         soundId = soundId || SoundCfg.effect.comm_click_sound
        //         AudioEngine.playEffect(soundId)
        //     }
        // }
        // 获取无黑边等比缩放比例
        // @return 一个缩放比


        static getNoBorderScaleValue(nodeWidth, nodeHeight) {
          var gameWidth = Display.width;
          var gameHeight = Display.height;
          var sx = gameWidth / nodeWidth;
          var sy = gameHeight / nodeHeight;
          var maxScale = 0;

          if (sx > sy) {
            maxScale = sx;
          } else {
            maxScale = sy;
          }

          return maxScale;
        }

        static createLoadingAction(objList, interval, token) {
          TimerManager.removeTimerWithToken(token);
          var index = 0;

          var showObjList = function showObjList() {
            for (var i in objList) {
              var v = objList[i];
              v.active = parseInt(i) <= index;
            }
          };

          TimerManager.addTimer(interval * 1000, function () {
            index = index + 1;

            if (index > objList.length) {
              index = 1;
            }

            showObjList();
          }, this, true, null, objList);
          showObjList();
        }

        static getFullFrameScale() {
          var scale = 1;

          if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_WIDTH) {
            var frameSize = Display.sizeInPixels;
            var contentSize = size(0, 0);
            scale = frameSize.height / Display.design_height / (frameSize.width / Display.design_width);
          }

          return scale;
        } // 设置精灵边框


        static setSpriteFrameRect(node, top, botton, left, right) {
          var sprite = node.getComponent(Sprite);

          if (sprite) {
            sprite.type = Sprite.Type.SLICED;
            if (!sprite.spriteFrame) sprite.spriteFrame = new SpriteFrame();
            sprite.spriteFrame.insetTop = top;
            sprite.spriteFrame.insetBottom = botton;
            sprite.spriteFrame.insetLeft = left;
            sprite.spriteFrame.insetRight = right;
          }
        }

        static setButtonTextColor(node, color) {
          node.getChildByName("Label").getComponent(Label).color = color;
        }

        static playRotateActionUp(node, fAngle, tAngle) {
          node.angle = fAngle != null ? fAngle : 0;
          tween(node).to(0.2, {
            angle: tAngle != null ? tAngle : -90
          }).start();
        }

        static playRotateActionDown(node, fAngle, tAngle) {
          node.angle = fAngle != null ? fAngle : -90;
          tween(node).to(0.2, {
            angle: tAngle != null ? tAngle : 0
          }).start();
        } // public static widgetBtnSmallAim(nodeObj, smallScale?: number) {
        //     let scale = 0.9
        //     if (smallScale) {
        //         scale = smallScale
        //     }
        //     nodeObj.stopAllActions()
        //     nodeObj.runAction(
        //         scaleTo(0.1, scale * nodeObj.scaleX / Math.abs(nodeObj.scaleX),
        //             scale * nodeObj.scaleY / Math.abs(nodeObj.scaleY))
        //     )
        // }
        //todo func可能会因为this对象没指定而有问题
        // public static widgetResume(nodeObj, func?: any, resumeScale?: number) {
        //     let scale = 1
        //     if (resumeScale) {
        //         scale = resumeScale
        //     }
        //     nodeObj.stopAllActions()
        //     nodeObj.runAction(
        //         sequence(
        //             scaleTo(0.1, scale),
        //             callFunc(function (nodeObj) {
        //                 if (func) {
        //                     func(nodeObj)
        //                 }
        //             })
        //         )
        //     )
        // }
        // cc引擎在节点添加到场景，即实际能渲染时，部分接口才会生效
        //例如setContentSize，因此添加如下接口。


        static runAfterRender(comp, cbFunc, target) {
          if (comp) {
            comp["start"] = function () {
              if (target) {
                cbFunc.apply(target, []);
              } else {
                cbFunc();
              }
            }; // comp["onLoad"] = function () {
            //     if (target) {
            //         cbFunc.apply(target, []);
            //     } else {
            //         cbFunc();
            //     }
            // }

          }
        } // 设施按钮是否可以点击


        static setButtonIsCanClick(node, isCanClick) {
          if (isCanClick) {
            node.resumeSystemEvents(true);
          } else {
            node.pauseSystemEvents(true);
          }
        } // 持续缩放动画


        static scaleForeverAnim(target, bigS, smallS, time) {
          Tween.stopAllByTarget(target);
          var toScale1 = bigS || 0.1;
          toScale1 = v3(target.scale.x + toScale1, target.scale.y + toScale1, target.scale.z + toScale1);
          var toScale2 = -(smallS || 0.1);
          toScale2 = v3(target.scale.x + toScale2, target.scale.y + toScale2, target.scale.z + toScale2);
          time = time || 0.6;
          tween(target).repeatForever(tween(target).to(time, {
            scale: toScale1.clone()
          }).to(time, {
            scale: toScale2.clone()
          })).start();
        }

        static isIphoneX() {
          // return true
          return SdkManager.getInstance().isIphoneX();
        }
        /**
         * itemicon 图片已经打成图集
         * @param node 
         * @param iconPath  item_100001
         */


        static loadItemIconImg(node, iconPath, finishCallBack) {
          var plistPath = PathDefine.getItemIconPlistPath(iconPath);

          if (!plistPath) {
            return;
          }

          var sprFrame = TextureManager.getSpriteFrameFromCache(iconPath);
          var spriteComp = node.getComponent(Sprite);

          if (spriteComp == null) {
            node.addComponent(Sprite);
          }

          node["__loadItemIconImg_iconPath"] = iconPath;

          if (sprFrame) {
            node.getComponent(Sprite).spriteFrame = sprFrame;
          } else {
            TextureManager.loadPlist({
              resPath: plistPath,
              callback: function callback(sprFrame) {
                if (node.isValid && node["__loadItemIconImg_iconPath"] == iconPath) {
                  node.getComponent(Sprite).spriteFrame = TextureManager.getSpriteFrameFromCache(iconPath);
                  finishCallBack && finishCallBack();
                }
              },
              target: this
            });
          }
        }
        /**
         * 小游戏特殊处理缩放
         * @param node 要缩放的节点
         * @param num 缩放倍数
         */


        static littleGameScale(node, numX, numY) {
          if (SdkManager.getInstance().isHasScaleRes()) {
            if (numX != undefined && numY != undefined) {
              node.setScale(node.scale.x * numX, node.scale.y * numY);
            } else if (numX != undefined) {
              node.setScale(node.scale.x * numX, node.scale.y * numX);
            } else {
              node.setScale(node.scale.x * 1.25, node.scale.y * 1.25);
            }
          }
        } //小游戏按钮偏移


        static sdkRightTopMove(closeBtn, movePos) {
          if (!closeBtn) {
            return false;
          }

          if (SdkManager.getInstance().isSmallGame()) {
            var pos = movePos == undefined ? Display.MOVE_LEFT : movePos;
            closeBtn.setPosition(closeBtn.getPosition().x + pos.x, closeBtn.getPosition().y + pos.y);
            return true;
          }

          return false;
        }

        static getHeightAdaptionScale() {
          var scale = v3(1, 1, 1);

          if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_HEIGHT) {
            scale = Display.getMaxScal();
          }

          return scale;
        }

        static showAssets(node, num) {
          var s = node.getComponent(Label);
          var text = "";

          if (num >= 1000000) {
            text = Math.floor(num / 10000) + language.numlv.wan;
          } else {
            text = num + "";
          }

          if (s != null) {
            s.string = text;
          }

          return s;
        }
        /**把超过100万的数字改成万为单位，返回字符串 by lwx */


        static numToWanString(num) {
          var text = '';

          if (num >= 1000000) {
            text = Math.floor(num / 10000) + language.numlv.wan;
          } else {
            text = num + "";
          }

          return text;
        }
        /**
         * 数字显示缩写
         * @param node label结点
         * @param num 数量
         * @param abbreviation 大于多少显示缩写
         */


        static numberAbbreviation(node, num, abbreviation) {
          var s = node.getComponent(Label);
          var text = ""; //亿

          if (num >= 100000000) {
            text = Math.floor(num / 100000000) + language.numlv.yi;
          } else if (num >= abbreviation) {
            text = Math.floor(num / 10000) + language.numlv.wan;
          } else {
            text = num + "";
          }

          if (s != null) {
            s.string = text;
          }

          return s;
        }
        /**返回数字缩写带单位 */


        static numberShort(num, abbreviation) {
          var text = ""; //亿

          if (num >= 100000000) {
            text = Math.floor(num / 100000000) + language.numlv.yi;
          } else if (num >= abbreviation) {
            text = Math.floor(num / 10000) + language.numlv.wan;
          } else {
            text = num + "";
          }

          return text;
        }

        static doShake(node) {
          var pos = node.getPosition();
          var offset = 10;
          tween(node).to(0.03, {
            position: v3(pos.x - (2 + offset), pos.y + (offset + 10))
          }).to(0.03, {
            position: v3(pos.x + (1 + offset), pos.y - (offset + 1))
          }).set({
            position: pos
          }).union().repeat(2).start();
        }

        static showNum(num) {
          var text = "";

          if (num >= 10000 && num < 100000000) {
            var thousand = Math.floor(num / 10000);
            var kilobit = Math.floor(num % 10000 / 1000); //千位数

            var hundred = Math.floor(num % 1000 / 100); //百位数

            return text = thousand + "." + kilobit + language.numlv.wan;
          } else if (num >= 100000000) {
            var hundreds_millions = Math.floor(num / 100000000);
            var millions_millions = Math.floor(num % 100000000 / 10000000); //千万位

            var million = Math.floor(num % 10000000 / 1000000); //百万位

            return text = hundreds_millions + "." + millions_millions + language.numlv.yi;
          } else {
            return text = num + "";
          }
        }
        /**
         * 关闭当前打开的窗口
         * @param winName 
         */


        static closeOpeningWinDow(winName) {
          if (!winName || winName == "") {
            return;
          }

          var win = WindowManager.getInstance().getWinByName(winName);

          if (win) {
            win.closeBySelf();
          }
        }
        /**
         * 设置背景尺寸
         */


        static setBgMaxSize(node) {
          if (!node) {
            if (DEBUG) {
              log("node为空");
            }

            return;
          }

          node.getComponent(UITransform).setAnchorPoint(v2(0, 0));
          node.setPosition(0, 0);
          node.getComponent(UITransform).height = Display.height;
          node.getComponent(UITransform).width = Display.design_width;
          node.setScale(v3(Display.getMaxScal()));
        }
        /**
         * 移出屏幕隐藏
         * @params 节点或节点数组
         */


        static moveOutHidWithNode(params) {
          if (params instanceof Node) {
            var moisCom = params.getComponent(MoveOutInScreenComponent);

            if (!moisCom) {
              moisCom = params.addComponent(MoveOutInScreenComponent);
            }

            moisCom.moveOut();
            params.active = false;
          } else {
            for (var i in params) {
              var node = params[i];

              var _moisCom = node.getComponent(MoveOutInScreenComponent);

              if (!_moisCom) {
                _moisCom = node.addComponent(MoveOutInScreenComponent);
              }

              _moisCom.moveOut();

              node.active = false;
            }
          }
        }
        /**
         * 移进显示区
         * @params 节点或节点数组
         * @originalX 移入时指定位置
         * @noDelay 不要移时执行
         */


        static moveInShowWithNode(params, originalX, noDelay) {
          if (!params) {
            return;
          }

          if (params instanceof Node) {
            var moisCom = params.getComponent(MoveOutInScreenComponent);

            if (!moisCom) {
              moisCom = params.addComponent(MoveOutInScreenComponent);
            }

            moisCom.moveIn(noDelay, originalX);
            params.active = true;
          } else {
            for (var i in params) {
              var node = params[i];

              var _moisCom2 = node.getComponent(MoveOutInScreenComponent);

              if (!_moisCom2) {
                _moisCom2 = node.addComponent(MoveOutInScreenComponent);
              }

              _moisCom2.moveIn(noDelay, originalX);

              node.active = true;
            }
          }
        }
        /**获取fnt字体大小，传入的ttf字体大小+2 */


        static getfntSize(size) {
          //当前只有中文支持
          // if (isNaN(size)) {
          //     return 38;
          // }
          // return size + 2;    
          return 38;
        }

        static getValidRect() {
          return Display.validRect;
        }
        /**
         * 传入时装ID，设置时装模型的时装
         * @param model 时装模型
         * @param fashionSetsId 时装套装ID
         */


        static setModelFashion(model, fashionSetsId) {
          if (!model || !fashionSetsId) {
            return;
          }

          var itemSuit = FashionData.getInstance().getFashionSetsById(fashionSetsId);

          if (itemSuit && itemSuit.sets) {
            var tempArr = Utils.str2arr(itemSuit.sets);
            var modelFashionList = [];

            for (var i = 0; i < tempArr.length; i++) {
              var element = tempArr[i];
              var fId = Number(element[1]);
              var itemPart = FashionData.getInstance().getFashionItem(fId);

              if (itemPart) {
                var fpd = new FashionPartData();
                fpd.id = itemPart.id;
                fpd.type = itemPart.type;
                modelFashionList.push({
                  id: itemPart.id,
                  type: itemPart.type
                });
              }
            } // 搭配展示妆容


            if (itemSuit.makeup_sets) {
              var faceCfg = FashionData.getInstance().getCosmeticsSetsDataById(itemSuit.makeup_sets);

              if (faceCfg) {
                var setsStr = faceCfg.sets;
                var setsArr = Utils.str2arr(setsStr);

                for (var key_setsArr in setsArr) {
                  var element_setsArr = setsArr[key_setsArr];
                  modelFashionList.push({
                    id: element_setsArr[1],
                    type: element_setsArr[0]
                  });
                }
              }
            }

            model.setData({
              ary_looks: modelFashionList
            });
          }
        }
        /**
         * 传入时装ID，设置时装模型的时装
         * @param model 时装模型
         * @param fashion_id 时装套装ID
         */


        static setModelFashionWithMyFace(model, fashion_id) {
          if (!model || !fashion_id) {
            return;
          }

          var itemSuit = FashionData.getInstance().getFashionSetsById(fashion_id);

          if (itemSuit && itemSuit.sets) {
            var tempArr = Utils.str2arr(itemSuit.sets);
            var modelFashionList = [];

            for (var i = 0; i < tempArr.length; i++) {
              var element = tempArr[i];
              var fId = Number(element[1]);
              var itemPart = FashionData.getInstance().getFashionItem(fId);

              if (itemPart) {
                var fpd = new FashionPartData();
                fpd.id = itemPart.id;
                fpd.type = itemPart.type;
                modelFashionList.push(fpd);
              }
            }

            var faceData = FashionManager.getInstance().getdefaulFaceData();

            if (faceData) {
              for (var faceKey in faceData) {
                var faceOne = faceData[faceKey];
                modelFashionList.push(faceOne);
              }
            }

            model.setData({
              ary_looks: modelFashionList
            });
          }
        }
        /**
        * 过滤特殊字符及Emoji表情符号
        * @param inputString 传入的字符串
        */


        static filterSpecialChar(inputString) {
          var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); // 过滤特殊字符

          var subString = inputString.replace(pattern, '');
          var tmpString = inputString;
          var isTheSame = subString != tmpString;

          while (subString != tmpString) {
            tmpString = subString;
            subString = subString.replace(pattern, '');
          } // emoji表情字符过滤


          var rep = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
          subString = subString.replace(rep, "");
          return subString;
        }
        /**
         * 发送数据到本地服务器 并将数据保存到指定路径下（需要提前启动本地服务器）
         * @param data JSON数据 不必主动转成String格式
         * @param filePath 数据存放的路径 默认值为./_noUpdate/${Date.now()}.txt
         * @param type 请求类型 0: 写文本 1: 读文本 2: 写Excel 3: 读Excel
         * @param port 服务器端口 默认3000
         * @param successCb 成功请求回调 回参中若data.code为200 表示请求且处理成功了 其它情况表示处理失败
         * @param failCb 失败请求回调
         * @returns 
         */


        static writeFileToLocal(data, filePath, type, port, successCb, failCb) {
          if (type === void 0) {
            type = 0;
          }

          if (port === void 0) {
            port = 3000;
          }

          if (!data) {
            return;
          }

          var xhr = new XMLHttpRequest();
          xhr.open('POST', "http://127.0.0.1:" + port, true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
              var response = xhr.responseText;
              successCb && successCb(JSON.parse(response));
            }
          };

          xhr.onerror = function () {
            failCb && failCb();
          };

          var tmpData = {
            type: type,
            filePath: filePath,
            fileData: JSON.stringify(data)
          };
          xhr.send(JSON.stringify(tmpData));
        }
        /**
         *
         *
         * @static  创建材质并设置其texture，主要用于漫反射贴图，模型贴图
         * @param {Texture2D} res Texture资源
         * @param {Material} [material]  材质
         * @param {Material} passIndex 渲染使用的 Pass 对象数组,默认0
         * @return {*}  {Material} 
         * @memberof Display
         */


        static createAndSetMaterial(res, material, passIndex) {
          var mat = material;
          var pass = passIndex || 0;

          if (mat == null) {
            mat = new Material();
            mat.initialize({
              effectName: "builtin-standard",
              defines: {
                USE_ALBEDO_MAP: true
              }
            });
          }

          mat.setProperty("mainTexture", res, pass);
          mat.setProperty("emissiveMap", res, pass);
          return mat;
        }
        /**震动节点 */


        static shakeScreen(node, sType, isDef, pow, num, endCallback, time) {
          if (time === void 0) {
            time = 0.04;
          }

          sType = sType || 1;
          num = num || 1;
          var d = isDef ? 1 : -1;
          var tx = node.position.x,
              ty = node.position.y,
              tz = node.position.z;
          node.setPosition(tx, ty, tz);
          var arr;
          var ts = time;

          if (sType == 1) {
            var dis = 20 * pow;
            arr = tween(node).to(ts, {
              position: v3(tx, ty + dis, tz + dis)
            }).to(ts, {
              position: v3(tx, ty + dis * 1.5, tz + dis * 1.5)
            }).to(ts, {
              position: v3(tx, ty + dis * -1.5, tz + dis * -1.5)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          } else if (sType == 2) {
            var _dis = 20 * pow;

            arr = tween(node).to(ts, {
              position: v3(tx, ty + _dis, tz + _dis)
            }).to(ts, {
              position: v3(tx, ty + _dis * -1.5, tz + _dis * -1.5)
            }).to(ts, {
              position: v3(tx, ty + _dis * 1.5, tz + _dis * 1.5)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          } else if (sType == 3) {
            var _dis2 = 15 * pow;

            arr = tween(node).to(ts, {
              position: v3((tx - _dis2) * d, ty, tz)
            }).to(ts, {
              position: v3((tx + _dis2 * 2 / 3) * d, ty, (tz + _dis2 * 2 / 3) * d)
            }).to(ts, {
              position: v3((tx - _dis2 * 1 / 3) * d, ty, (tz + _dis2 * 2 / 3) * d)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          } else if (sType == 4) {
            var _dis3 = 15 * pow;

            arr = tween(node).to(ts, {
              position: v3((tx + _dis3) * d, ty, (tz + _dis3) * d)
            }).to(ts, {
              position: v3((tx - _dis3 * 2 / 3) * d, ty, (tz - _dis3 * 2 / 3) * d)
            }).to(ts, {
              position: v3((tx + _dis3 * 1 / 3) * d, ty, (tz + _dis3 * 1 / 3) * d)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          } else if (sType == 5) {
            var _dis4 = 20 * pow;

            var x1 = (tx + _dis4 * 3 / 4) * d;
            var y1 = ty - _dis4;
            var x2 = (tx - _dis4 * 1 / 2) * d;
            var y2 = ty + _dis4 * 3 / 4;
            var x3 = (tx + _dis4 * 1 / 4) * d;
            var y3 = ty - _dis4 * 1 / 2;
            arr = tween(node).to(ts, {
              position: v3(x1, y1, tz)
            }).to(ts, {
              position: v3(x2, y2, tz)
            }).to(ts, {
              position: v3(x3, y3, tz)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          } else if (sType == 6) {
            var _dis5 = 20 * pow;

            var _x = (tx + _dis5 * 3 / 4) * d;

            var _y = ty + _dis5;

            var _x2 = (tx - _dis5 * 1 / 2) * d;

            var _y2 = ty - _dis5 * 3 / 4;

            var _x3 = (tx + _dis5 * 1 / 4) * d;

            var _y3 = ty + _dis5 * 1 / 2;

            arr = tween(node).to(ts, {
              position: v3(_x, _y, tz)
            }).to(ts, {
              position: v3(_x2, _y2, tz)
            }).to(ts, {
              position: v3(_x3, _y3, tz)
            }).to(ts, {
              position: v3(tx, ty, tz)
            });
          }

          if (arr) {
            tween(node).repeat(num, arr).call(() => {
              node.setPosition(tx, ty, tz);

              if (endCallback) {
                endCallback();
              }
            }).start();
          }
        }
        /**获取当前分辨率下的屏幕rect */


        static getScreenRect() {
          var rect = new Rect(Display.frameSzie.width / 2, Display.frameSzie.height / 2, Display.frameSzie.width, Display.frameSzie.height);

          if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_HEIGHT) {
            //宽屏,高度铺满,可视区域的宽度由高度决定
            var ratio = Number((Display.design_height / Display.design_width).toFixed(3));
            rect.width = Display.frameSzie.height / ratio;
          }

          return rect;
        }
        /**
         * 添加UIMeshComp,用于3d物体显示在ui上,注意node或者子节点必需带有meshrenderer组件
         */


        static addUIMeshComponent(node, layer) {
          var _layer = layer ? layer : LayerHelper.UI_2D;

          Display.setLayer(node, _layer);

          if (node && node.getComponent(MeshRenderer) && !node.getComponent(UIMeshRenderer)) {
            node.addComponent(UIMeshRenderer);
          }

          var childs = node.getComponentsInChildren(MeshRenderer);

          for (var index = 0; index < childs.length; index++) {
            var element = childs[index].node;

            if (element && !element.getComponent(UIMeshRenderer)) {
              element.addComponent(UIMeshRenderer);
            }
          }
        }
        /** 合适的屏幕尺寸 */


        /** 更新合适的屏幕尺寸 */
        static updateSuitableUISize() {
          var designSize = view.getDesignResolutionSize(); // 设计分辨率

          var visibleSize = view.getVisibleSize(); // 实际分辨率

          var realHeight = designSize.height;
          var realWidth = designSize.width;

          if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_HEIGHT) {
            realWidth = visibleSize.width / visibleSize.height * realHeight;

            if (realWidth > designSize.width) {
              // 高适配下 左右多出来的内容不显示内容
              realWidth = designSize.width;
            }
          } else if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_WIDTH) {
            realHeight = visibleSize.height / visibleSize.width * realWidth;
          }

          this.suitableUISize.width = realWidth;
          this.suitableUISize.height = realHeight;
          this.suitableWidthScale = realWidth / designSize.width;
          this.suitableHeightScale = realHeight / designSize.height;
          console.log("Update Suitable UISize: witdh(" + this.suitableUISize.width + "), height(" + this.suitableUISize.height + "), widthScale(" + this.suitableWidthScale + "), heightScale(" + this.suitableHeightScale + ")");
        }
        /**
        * 等比例缩放节点以达到全屏的目的,跟newwinbase方法一致
        * @param node 
        * @param mode 缩放方式 SCALE: 修改节点的大小, SIZE: 修改节点的宽高
        * @param real 为真表示根据node的真实宽高去计算 为假表示根据屏幕分辨率的比例变化去计算 默认为真
        */


        static fullNode(node, mode, real) {
          if (mode === void 0) {
            mode = "SIZE";
          }

          if (real === void 0) {
            real = true;
          }

          if (!node) {
            return;
          }

          var designSize = view.getDesignResolutionSize(); // 设计分辨率

          var suitableSize = Display.suitableUISize; // 实际分辨率

          var updateScale = 1;

          if (real) {
            var uiTrans = node._uiProps.uiTransformComp;

            if (!uiTrans) {
              console.warn("节点上不存在UITransform组件", node.name);
              return;
            }

            var nodeSize = new Size(uiTrans.width * node.scale.x, uiTrans.height * node.scale.y);
            var realScale = suitableSize.height / suitableSize.width;
            var nodeScale = nodeSize.height / nodeSize.width;

            if (nodeScale > realScale) {
              // node相对而言更高 
              updateScale = suitableSize.width / nodeSize.width;
            } else {
              updateScale = suitableSize.height / nodeSize.height;
            }
          } else {
            if (Display.curResolutionPolicy == ResolutionPolicy.FIXED_WIDTH) {
              updateScale = Number((suitableSize.height / designSize.height).toFixed(2)) + 0.01;
            } else {// 都高适配了。。我还需要做什么？
            }
          }

          if (updateScale <= 1) {
            return;
          }

          if (mode == "SCALE") {
            node.setScale(node.scale.x * updateScale, node.scale.y * updateScale, node.scale.z);
          } else if (mode == "SIZE") {
            var _uiTrans = node._uiProps.uiTransformComp;

            if (!_uiTrans) {
              console.warn("节点上不存在UITransform组件", node.name);
              return;
            }

            _uiTrans.setContentSize(_uiTrans.width * updateScale, _uiTrans.height * updateScale);
          }
        }
        /**
         * 设置节点的可见情况（注意 该方法只是改变透明度 所以如果节点带有可点击方法 点击节点区域还是可能会响应方法的）
         * @param node 
         * @param isVisible 
         */


        static setNodeVisible(node, isVisible) {
          if (!node) {
            return;
          }

          var comp = node.getComponent(UIOpacity);

          if (!comp) {
            comp = node.addComponent(UIOpacity);
          }

          comp.opacity = isVisible ? 255 : 0;
        }

        static setNodeColor(node, color) {
          var comp = node.getComponent(UIRenderer);

          if (!comp) {
            return;
          }

          comp.color = color;
        }
        /**自动点击  传入对应节点的世界坐标  (手机端存在点问题)*/


        static autoClick(worldPos) {
          // let worldPos = v2(1361.5, 415.5)
          var posA = v2(Display.visibleToScreenX(worldPos.x), Display.visibleToScreenX(worldPos.y));
          input.activeDispatchEventTouch(posA.x, posA.y, Input.EventType.TOUCH_START);
          setTimeout(() => {
            input.activeDispatchEventTouch(posA.x, posA.y, Input.EventType.TOUCH_END);
          }, 10);
        }
        /**自动点击 
         * widget 传入对应节点
         * posX：相对中心点的偏移X
         * posY：相对中心点的偏移Y
         */


        static fakeClick(widget, posX, posY) {
          posX = posX ? posX : widget.position.x;
          posY = posY ? posY : widget.position.y;

          if (isValid(widget, true)) {
            var changedTouches = [];
            var endEvent = new EventTouch(changedTouches, true, Node.EventType.TOUCH_END);
            endEvent.touch = new Touch(posX, posY);
            var startEvent = new EventTouch(changedTouches, true, Node.EventType.TOUCH_START);
            startEvent.touch = new Touch(posX, posY);
            widget.emit(Node.EventType.TOUCH_START, startEvent);
            widget.emit(Node.EventType.TOUCH_END, endEvent);
            return true;
          }

          return false;
        }

      });

      Display.suitableUISize = new Size(1024, 1821);

      /** 合适的屏幕宽比屏幕设计宽 */
      Display.suitableWidthScale = 1;

      /** 合适的屏幕高比屏幕设计高 */
      Display.suitableHeightScale = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1cc1fc8510ac5e7988c22c66d3b6eec04b53533.js.map