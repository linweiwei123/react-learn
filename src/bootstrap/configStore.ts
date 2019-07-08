import { StoreState } from '../common/types';
import { applyMiddleware, compose, createStore } from 'redux';
import createReducers from '../reducers';
import { routerMiddleware } from "connected-react-router";
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { promiseMiddle } from './middleware';

export const history = createBrowserHistory();

const getMiddlewares = () => {
  if(process.env.NODE_ENV === 'production'){
    return applyMiddleware(routerMiddleware(history), promiseMiddle)
  }
  else {
    return applyMiddleware(routerMiddleware(history), promiseMiddle, createLogger())
  }
}

const configStore = (preloadedState: StoreState) => {
  const store = createStore(
    createReducers(history),
    preloadedState,
    compose(getMiddlewares())
  );
  return store;
};

export default configStore;