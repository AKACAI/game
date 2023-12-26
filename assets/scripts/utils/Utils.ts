import { Color, Vec2, Vec3 } from "cc";
import LogManager from "./LogManager";

export default class Utils {
    public static getCurTimeStamp(): number {
        return Date.now();
    }

    public static clamp(target: number, min: number, max: number): number {
        let result = target;
        if (target > max)
            result = max;
        else if (target < min)
            result = min;
        return result;
    }

    public static vec2color(vec: Vec3): Color {
        let x = Utils.clamp(vec.x, 0, 255);
        let y = Utils.clamp(vec.y, 0, 255);
        let z = Utils.clamp(vec.z, 0, 255);
        console.log(x, y, z);
        return new Color(x, y, z);
    }

    public static vec2ToVec3(vec: Vec2): Vec3 {
        return new Vec3(vec.x, vec.y, 0);
    }

    public static str2vec3(str: string): Vec3 {
        str = str.replace(/{/, "");
        str = str.replace(/}/, "");
        let infos = str.split(',');
        return new Vec3(Number(infos[0]), Number(infos[1]), Number(infos[2]));
    }

    public static str2color(str: string): Color {
        str = str.replace("#", "");
        let r_val = str.substring(0, 2);
        let g_val = str.substring(2, 4);
        let b_val = str.substring(4, 6);
        return new Color(parseInt(r_val, 16), parseInt(g_val, 16), parseInt(b_val, 16));
    }
}