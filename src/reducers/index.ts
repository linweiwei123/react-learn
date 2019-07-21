import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { agents } from './home';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  agents
})

