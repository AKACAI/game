System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ConstStr, _crd, ccclass, property, PanelName;

  _export("ConstStr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f7c1bVe3RLE6JOMBIsKB1Q", "Name2Panel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelName", PanelName = {
        MainMenu: "MainMenu",
        GamePanel: "GamePanel",
        GameTip: "GameTip"
      });
      /** 既作为预制体的路径，也作为key */


      _export("ConstStr", ConstStr = class ConstStr {});

      ConstStr.PanelPath = {
        [PanelName.MainMenu]: "main_menu/main_menu",
        [PanelName.GamePanel]: "game_panel/game_panel",
        [PanelName.GameTip]: "game_tip/game_tip_view"
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1241bcc960d43c0263da6b29fbb871bcc172e5ce.js.map