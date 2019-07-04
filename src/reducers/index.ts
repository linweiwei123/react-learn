import * as constants from '../common/contants/index';
import { IUserInfo } from '../common/types';
import { ClickCountAction, CurrentLevelAction } from '../actions';
import { combineReducers } from 'redux';

function userInfo(state: IUserInfo = { name: 'lww', level: 2}, action: CurrentLevelAction) {
    switch (action.type) {
        case constants.INCREMENT_LEVEL: return {...state, level: state.level + 1};
        case constants.DECREMENT_LEVEL: return {...state, level: state.level - 1};
        default : return state;
    }
}

function clickCounts(state: number = 0, action: ClickCountAction) {
    switch (action.type) {
        case constants.CLICK_COUNT: return state + 1;
        default : return state
    }
}

export default combineReducers({
    userInfo,
    clickCounts
})