import { Color } from "cc"

export default class LogManager {
    public static log(...param: any) {
        console.log(param);
    }

    public static warn(...param: any) {
        console.warn(param);
    }

    public static error(...param: any | Error) {
        console.error(param);
    }
}