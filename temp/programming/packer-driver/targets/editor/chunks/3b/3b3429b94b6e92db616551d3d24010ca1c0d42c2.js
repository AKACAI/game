System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, PhysicsController, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../common/Singleton", _context.meta, extras);
  }

  _export("PhysicsController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "707e9ttgmlMoorg4Fd0mttE", "PhysicsController", undefined);

      _export("PhysicsController", PhysicsController = class PhysicsController extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 重力加速度
        init() {
          this.setGravityFactor(10);
        }

        setGravityFactor(value) {
          this._gravityFactor = value;
        }

        get gravityFactor() {
          return this._gravityFactor;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b3429b94b6e92db616551d3d24010ca1c0d42c2.js.map