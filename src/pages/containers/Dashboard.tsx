import { StoreState } from '../../common/types/index';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import * as constants from '../../common/contants/index'
import Home from '../components/Dashboard/home';
import { IArticle } from '../../actions/home';

export const mapStateToProps = (state: StoreState) => ({
  name: state.userInfo.name,
  level: state.userInfo.level,
  clickCounts: state.clickCounts,
  articles: state.articles
});

export const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: () => dispatch(actions.incrementCurrentLevel()),
  onDecrement: () => dispatch(actions.decrementCurrentLevel()),
  addClickCounts: () => dispatch(actions.addClickCount()),
  onLoad: (payload: Promise<IArticle[]>) => dispatch({
    type: constants.FETCH_ARTICLES_ALL_FINISH,
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);