import * as constants from '../common/contants/index';
import axios from 'axios';

export interface IArticle {
  id: number,
  author: string,
  title: string,
  introduce: string,
  content: string,
  tags: string[],
  updateTime: string
}

export function requestArticlesAll(){
  return {
    type: constants.FETCH_ARTICLES_ALL
  }
}

export const fetchArticles = () => (dispatch:any) => {
    axios.get('/articles/all')
      .then(resp => {
        console.log('返回');
        dispatch({
          type: constants.FETCH_ARTICLES_ALL_FINISH,
          articles: resp.data
        })
      })
  };