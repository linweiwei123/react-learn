export interface StoreState {
    userInfo: IUserInfo,
    clickCounts: number
}

export interface IUserInfo {
    name: string;
    level: number;
}