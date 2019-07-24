import react from 'react';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { default as createBrowserHistory } from 'history/createBrowserHistory';
import configStore from './configStore';
import { History } from 'history';
import { agents, currentAgent } from '../reducers/home';

function Wad(){

  // 创建histoiry
  this.history = createBrowserHistory();
}

/**
 * confg
 * {
 *   module: 'key',
 *   state: value,
 *   reducers:
 * }
 * @param conf
 */
Wad.prototype.setup = function(conf){
  // 先考虑单一情况（数组情况暂不考虑）
  const {module, state, reducers} = conf;

  const storeState = {
    module: state
  };

  const conbineReducers =

  // reducers逻辑整合

  // 创建store
  this.store = configStore(storeState, conbineReducers, history);
};

function combineReducers(history, reducers){
  router: connectRouter(history),
  ...reducers
}



const wad = new Wad();
export default wad;
