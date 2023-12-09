import { _decorator, EventMouse, Node } from "cc";
import { UILayer } from "../../../manager/ui_manager/UIManager";
import { UIPanel, ResDestroyType } from "../../../manager/ui_manager/UIPanel";
import { GameToolsView } from "./GameToolsView";
import { GridSquare } from "./GridSquare";
const { ccclass, property } = _decorator;

@ccclass('GamePanel')
export class GamePanel extends UIPanel {
    private factorySpace: Node;
    private gridSquare: GridSquare;
    private game_tools_cv: GameToolsView;

    private isMouseDown: boolean = false;

    public init() {
        this._layer = UILayer.game;
        this._resDestroyType = ResDestroyType.directlyRelease;

        this.factorySpace = this.node.getChildByName("factory_space");
        this.gridSquare = this.factorySpace.getChildByName("grid_square").getComponent(GridSquare);
        this.game_tools_cv = this.node.getChildByName("game_tools_view").getComponent(GameToolsView);
        this.gridSquare.init();
        this.game_tools_cv.init();
        let nums: { num: number }[] = [
            { num: 1 },
            { num: 2 },
            { num: 3 },
            { num: 1 },
            { num: 6 },
            { num: 7 },
            { num: 1 },
            { num: 1 },
            { num: 2 },
            { num: 3 },
            { num: 1 },
            { num: 6 },
            { num: 7 },
            { num: 1 },
        ]
        this.game_tools_cv.setData(nums);
        this.isMouseDown = false;
    }

    public bindFunc() {
        this.factorySpace.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
        this.factorySpace.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.factorySpace.on(Node.EventType.MOUSE_DOWN, () => {
            this.isMouseDown = true;
        }, this);
        this.factorySpace.on(Node.EventType.MOUSE_UP, () => {
            this.isMouseDown = false;
        }, this);
    }


    public open() {
        super.open();
    }

    private onMouseWheel(event: EventMouse) {
        let scrollY = event.getScrollY();
        if (scrollY > 0) {
            this.gridSquare.zoomIn();
        }
        else if (scrollY < 0) {
            this.gridSquare.zoomOut();
        }
    }

    private onMouseMove(event: EventMouse) {
        if (this.isMouseDown) {
            let moveVec = event.getDelta();
            this.gridSquare.move(moveVec);
        }
    }

    public close() {
        super.close();
    }

    public dispose() {
        this.game_tools_cv.dispose();
    }
}


