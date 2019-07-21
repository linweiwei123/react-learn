import { StoreState } from '../../common/types/index';
import { connect } from 'react-redux';
import * as constants from '../../common/contants/index'
import Home from '../components/Dashboard/home';
import { IAgent } from '../../actions/home';

export const mapStateToProps = (state: StoreState) => ({
  agents: state.agents
});

export const mapDispatchToProps = (dispatch: any) => ({
  onLoad: (payload: Promise<IAgent[]>) => dispatch({
    type: constants.FETCH_AGETNS_ALL_FINISH,
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);