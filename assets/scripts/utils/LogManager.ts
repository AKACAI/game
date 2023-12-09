import { Color } from "cc"

export default class LogManager {
    public static log(content: string, color?: Color) {
        if (color) {
            console.log(`%c${content}`,`color:${color.toString()}`);
        }
        else { 
            console.log(content);
        }
    }

    public static warn(content: string) {
        console.warn(content);
    }

    public static error(content: string | Error) {
        console.error(content);
    }
}