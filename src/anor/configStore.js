import { applyMiddleware, compose, createStore } from '../../../redux';
import { routerMiddleware } from "connected-react-router";
import { promiseMiddle } from './middleware';
import { createLogger } from 'redux-logger';

const getMiddlewares = () => {
  if(process.env.NODE_ENV === 'production'){
    return applyMiddleware(routerMiddleware(history), promiseMiddle)
  }
  else {
    return applyMiddleware(routerMiddleware(history), promiseMiddle, createLogger())
  }
}

const configStore = (preloadState, reducers) => {
  const store = createStore(
    reducers,
    preloadState,
    compose(getMiddlewares())
  );
  return store;
};

export default configStore;