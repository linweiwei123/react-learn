import { StoreState } from '../common/types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Home from '../components/home/Home';

export const mapStateToProps = (state: StoreState) => ({
    name: state.userInfo.name,
    level: state.userInfo.level,
    clickCounts: state.clickCounts
});

export const mapDispatchToProps = (dispatch: any) => ({
    onIncrement: () => dispatch(actions.incrementCurrentLevel()),
    onDecrement: () => dispatch(actions.decrementCurrentLevel()),
    addClickCounts: () => dispatch(actions.addClickCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);