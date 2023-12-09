
interface EventData {
    eventName: string;
    listener: any;
    target: any;
}

export default class EventManager{
    private static _eventDict = {}

    // 添加事件监听
    static addEvent(eventName: string, listener: any, target: any){
        if(listener == null){
            return;
        }

        let listenerArr = EventManager._eventDict[eventName];
        if (listenerArr == null){
            listenerArr = [];
            EventManager._eventDict[eventName] = listenerArr;
        }

        for (let i = 0; i < listenerArr.length; i++) {
            if (listenerArr[i].listener === listener && listenerArr[i].target === target){
                return;
            }
        }

        //todo,优化为对象池
        let event_obj = <EventData>{};
        event_obj.eventName = eventName;
        event_obj.listener = listener;
        event_obj.target = target;

        listenerArr.push(event_obj);
    }

    // 移除事件监听
    static removeEvent(eventName: string, listener: any, target?:any){
        let listenerArr = EventManager._eventDict[eventName];
        if (listenerArr==null) {
            return;
        }

        if (!target){
            //这段代码最终删掉
            for (var i = 0; i < listenerArr.length; i++) {
                if (listenerArr[i].listener == listener){
                    listenerArr.splice(i,1)
                    // console.log("删除=",eventName,listenerArr)
                    break;
                }
            }
        }else{
            for (var i = 0; i < listenerArr.length; i++) {
                if (listenerArr[i].listener === listener && listenerArr[i].target === target) {
                    listenerArr.splice(i, 1);
                    // console.log("删除=", eventName, listenerArr)
                    break;
                }
            }
        }
    }

    // 抛出对应事件
    static dispatchEvent(eventName: string, data?: any){
        let listenerArr = EventManager._eventDict[eventName];
        if (listenerArr == null) {
            return
        }

        let event_obj = null;
        for (var i = 0; i < listenerArr.length; i++) {
            event_obj = listenerArr[i];
            if(event_obj.target != null){
                event_obj.listener.apply(event_obj.target, [data]);
                // event_obj.listener(event_obj.target, data)
            }else{
                event_obj.listener(data)
            }
        }
    }

    // 移除一个eventName下所有监听的事件
    static removeAllEvent(eventName: string){
        EventManager._eventDict[eventName] = null;
    }

    // 是否存在某个事件
    static hasEvent(eventName: string, listener: any){
        let listenerArr = EventManager._eventDict[eventName];
        if (listenerArr==null) {
            return false;
        }

        for (var i = 0; i < listenerArr.length; i++) {
            if(listenerArr[i] == listener){
                return true;
            }
        }
        return false;
    }

    static dispose(){
        EventManager._eventDict = null;
        EventManager._eventDict = {};
    }

}