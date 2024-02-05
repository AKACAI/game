System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameDefinition, _crd, Phy_Group;

  _export("GameDefinition", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d938cT5WqZJJ5YEGeJqUdu5", "GameDefinition", undefined);

      _export("GameDefinition", GameDefinition = class GameDefinition {});

      // 每单位长度代表的实际长度
      GameDefinition.meterPerUnit = 5;

      _export("Phy_Group", Phy_Group = /*#__PURE__*/function (Phy_Group) {
        Phy_Group[Phy_Group["DEFAULT"] = 1] = "DEFAULT";
        Phy_Group[Phy_Group["TERRAIN"] = 2] = "TERRAIN";
        Phy_Group[Phy_Group["GAMEOBJECT"] = 4] = "GAMEOBJECT";
        return Phy_Group;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa17b9050c815eb10b8cd99587faa4eb956b7166.js.map