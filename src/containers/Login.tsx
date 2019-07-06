import { connect } from 'react-redux';
import { StoreState } from '../common/types';
import Login from '../components/login/Login';
import { routeTo } from '../common/utils/routeUtils';
import { Dispatch } from 'redux';
import { CallHistoryMethodAction } from 'connected-react-router';

const mapStateToProps = (state: StoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<CallHistoryMethodAction>) => ({
  gotoPage: (path: string) => dispatch(routeTo(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)