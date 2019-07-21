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

function replaceAgent(agents: IAgent[], toReplaceAgent: IAgent){
  let temp = agents.slice(0);
  return temp.map(item => {
    return item.id === toReplaceAgent.id ? toReplaceAgent : item;
  })
}
