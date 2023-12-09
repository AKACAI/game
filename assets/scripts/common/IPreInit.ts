export interface IPreInit {
    init(): void;
    nextInitManager: IPreInit;
    setNextInitManager(nextInit: IPreInit): void;
}