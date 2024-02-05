System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, Utils, _dec, _class, _crd, ccclass, property, GridSquare;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../utils/Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cf80kGpJBBS7Wm6gS4/fKG", "GridSquare", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Tween', 'tween', 'UITransform', 'v2', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridSquare", GridSquare = (_dec = ccclass('GridSquare'), _dec(_class = class GridSquare extends Component {
        constructor() {
          super(...arguments);
          this.gridOriginSize = {
            x: 64,
            y: 64
          };
          this.maxScale = 3;
          this.minScale = 0.5;
          this.zoomSpeed = 0.1;
          this.moveSpeedRate = 0.4;
        }

        init() {
          this.reset();
          this.initFunc();
        }

        initFunc() {//EventManager.getInstance().addListener(EventStr.StartZoomInGrid, this.onZoomInGrid);
          //EventManager.getInstance().addListener(EventStr.StartZoomOutGrid, this.onZoomInGrid);
          //EventManager.getInstance().addListener(EventStr.EndZoomInGrid, this.onZoomInGrid);
          //EventManager.getInstance().addListener(EventStr.EndZoomOutGrid, this.onZoomInGrid);
        }

        zoomIn() {
          var _this$_tweenAnim;

          var targetScale = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clamp(this._curScale + this.zoomSpeed, this.minScale, this.maxScale);

          var targetPosX = this.node.getPosition().x * targetScale / this._curScale;

          var targetPosY = this.node.getPosition().y * targetScale / this._curScale;

          this._curScale = targetScale;
          (_this$_tweenAnim = this._tweenAnim) == null ? void 0 : _this$_tweenAnim.stop();
          this._tweenAnim = tween(this.node).to(0.2, {
            scale: new Vec3(targetScale, targetScale, 1),
            position: new Vec3(targetPosX, targetPosY, 0)
          });

          this._tweenAnim.start();
        }

        zoomOut() {
          var _this$_tweenAnim2;

          var targetScale = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clamp(this._curScale - this.zoomSpeed, this.minScale, this.maxScale);

          var targetPosX = this.node.getPosition().x * targetScale / this._curScale;

          var targetPosY = this.node.getPosition().y * targetScale / this._curScale;

          this._curScale = targetScale;
          (_this$_tweenAnim2 = this._tweenAnim) == null ? void 0 : _this$_tweenAnim2.stop();
          this._tweenAnim = tween(this.node).to(0.2, {
            scale: new Vec3(targetScale, targetScale, 1),
            position: new Vec3(targetPosX, targetPosY, 0)
          });

          this._tweenAnim.start();
        }

        move(deltaPos) {
          var targetPosX = this.node.getPosition().x + deltaPos.x * this.moveSpeedRate;
          var targetPosY = this.node.getPosition().y + deltaPos.y * this.moveSpeedRate;

          while (targetPosX > this.gridOriginSize.x * this._curScale) {
            targetPosX -= this.gridOriginSize.x * this._curScale;
          }

          while (targetPosX < -this.gridOriginSize.x * this._curScale) {
            targetPosX += this.gridOriginSize.x * this._curScale;
          }

          while (targetPosY > this.gridOriginSize.y * this._curScale) {
            targetPosY -= this.gridOriginSize.y * this._curScale;
          }

          while (targetPosY < -this.gridOriginSize.y * this._curScale) {
            targetPosY += this.gridOriginSize.y * this._curScale;
          }

          this.node.setPosition(targetPosX, targetPosY, 0);
        }

        reset() {
          this._curScale = 1;
          this.node.setPosition(0, 0, 0);
          this.node.setScale(1, 1, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88e8eeede549bb4a44d9c849e1d2db627a5a1f46.js.map