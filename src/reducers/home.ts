import * as constants from '../common/contants';
import { IAgent } from '../actions/home';

export function agents(state: IAgent[] = [], action: any) {
  switch (action.type) {
    case constants.FETCH_AGETNS_ALL_FINISH:
      return action.payload;
    case constants.EFTCH_CHANGED_AGENT:
      return replaceAgent(state, action.payload);
    default:
      return state;
  }
}

export function currentAgent(state: any = {}, action: any) {
  switch (action.type) {
    case constants.LOCAL_CHANGED_AGENT:
      return action.currentAgent;
    default: return state;
  }
}

function replaceAgent(state: IAgent[], toReplaceAgent: IAgent){
  const temp = state.slice(0);
  return temp.map((item: IAgent) => {
    return item.id === toReplaceAgent.id ? toReplaceAgent : item;
  })
}
