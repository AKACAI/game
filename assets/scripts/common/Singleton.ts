export class Singleton {
    public static getInstance<T extends {}>(this: new () => T): T {
        if (!(<any>this)._instance) {
            (<any>this)._instance = new this()
        }
        return (<any>this)._instance
    }
}