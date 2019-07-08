
export interface StoreState {
    userInfo: IUserInfo,
    clickCounts: number,
    articles: any
}

export interface IUserInfo {
    name: string;
    level: number;
}