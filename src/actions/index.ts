import * as constants from '../common/contants/index';

export interface IncrementCurrentLevel {
    type: constants.INCREMENT_LEVEL
}

export interface DecrementCurrentLevel {
    type: constants.DECREMENT_LEVEL
}

export type CurrentLevelAction = IncrementCurrentLevel | DecrementCurrentLevel;

export function incrementCurrentLevel(): IncrementCurrentLevel{
    return {
        type: constants.INCREMENT_LEVEL
    }
}

export function decrementCurrentLevel(): DecrementCurrentLevel {
    return {
        type: constants.DECREMENT_LEVEL
    }
}

export interface ClickCount {
    type: constants.CLICK_COUNT
}

export type ClickCountAction  = ClickCount;

export function addClickCount(): ClickCount{
    return {
        type: constants.CLICK_COUNT
    }
}
