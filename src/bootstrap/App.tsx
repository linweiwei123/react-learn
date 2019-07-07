import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from '../containers/Home';
import Login from '../containers/Login';
import configStore, { history } from './configStore';
import AsyncArticle from '../components/acticle/AsyncArticle';
import * as homeActions from '../actions/home';

const store = configStore({
  userInfo: {name: 'czb', level: 29},
  clickCounts: 0,
  articles: []
});

store.subscribe(() => {
  console.log(store.getState());
});

// 请求article数据，可能不需要异步action，在Home Class Component中请求返回数据后，同步dispatch action
homeActions.fetchArticles()(store.dispatch);

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path="/" component={HomeContainer}/>
            <Route path="/login" component={Login}/>
            <Route path="/article" component={AsyncArticle}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

