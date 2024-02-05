System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  _export("Singleton", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acb6erHujpA9rX8xgz/FGn8", "Singleton", undefined);

      _export("Singleton", Singleton = class Singleton {
        static getInstance() {
          if (!this._instance) {
            this._instance = new this();
          }

          return this._instance;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8e7263651215c7f791e89946c564fa17a39775d.js.map