import * as constants from '../common/contants';
import { IArticle } from '../actions/home';

export function articles(state: IArticle[] = [], action: any) {
  switch (action.type) {
    case constants.FETCH_ARTICLES_ALL_FINISH:
      return action.payload;
    default:
      return state;
  }
}