import { StoreState } from '../common/types';
import { applyMiddleware, compose, createStore } from 'redux';
import createReducers from '../reducers';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const configStore = (preloadedState: StoreState) => {
  const store = createStore(
    createReducers(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );
  return store;
};

export default configStore;