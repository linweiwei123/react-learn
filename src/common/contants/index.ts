// const/type模型可以让typescript字面量类型容易重构

export const INCREMENT_LEVEL = 'INCREMENT_LEVEL';
export type INCREMENT_LEVEL = typeof INCREMENT_LEVEL;

export const DECREMENT_LEVEL = 'DECREMENT_LEVEL';
export type DECREMENT_LEVEL = typeof DECREMENT_LEVEL;

export const CLICK_COUNT = 'CLICK_COUNT';
export type CLICK_COUNT = typeof CLICK_COUNT;

export const FETCH_ARTICLES_ALL = 'FETCH_ARTICLES_ALL';
export const FETCH_ARTICLES_ALL_FINISH = 'FETCH_ARTICLES_ALL_FINISH';