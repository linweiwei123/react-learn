import * as React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from '../containers/Home';
import Login from '../containers/Login';
import configStore, { history } from './configStore';
import AsyncArticle from '../components/acticle/AsyncArticle';


const store = configStore({
    userInfo: {name: 'czb', level: 29},
    clickCounts: 0
});

store.subscribe(() => {
    console.log(store.getState());
});

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path="/" component={HomeContainer} />
            <Route path="/login" component={Login}/>
            <Route path="/article" component={AsyncArticle}  />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

