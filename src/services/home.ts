import axios from 'axios';

export const homeArticles = () =>
  axios.get('/articles/all').then( resp => {
   return resp.data
  });