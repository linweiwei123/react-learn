import { StoreState } from '../common/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/index';
import Hello from '../components/home/Home';

export const mapStateToProps = (state: StoreState) => ({
    name: state.userInfo.name,
    level: state.userInfo.level,
    clickCounts: state.clickCounts
});

export const mapDispatchToProps = (dispatch: Dispatch<actions.CurrentLevelAction | actions.ClickCountAction>) => ({
    onIncrement: () => dispatch(actions.incrementCurrentLevel()),
    onDecrement: () => dispatch(actions.decrementCurrentLevel()),
    addClickCounts: () => dispatch(actions.addClickCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);