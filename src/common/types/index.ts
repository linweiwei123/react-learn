import { IArticle } from '../../actions/home';

export interface StoreState {
    userInfo: IUserInfo,
    clickCounts: number,
    articles: IArticle[]
}

export interface IUserInfo {
    name: string;
    level: number;
}