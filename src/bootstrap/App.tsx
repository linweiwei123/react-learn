import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configStore, { history } from './configStore';
import DynamicRoutes from './DynamicRoutes';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import styles from '../styles/base.scss';
import Sidebar from '../layouts/Sidebar/Sidebar';

const store = configStore({
  userInfo: {name: 'czb', level: 29},
  clickCounts: 0,
  articles: []
});

store.subscribe(() => {
  console.log(store.getState());
});

// 请求article数据，可能不需要异步action，在Home Class Component中请求返回数据后，同步dispatch action

class App extends React.Component {

  public render() {
    const layout = (
      <div className={styles["layout-app"]}>
        <Header />
        <div className={styles["layout-main"]}>
          <Sidebar/>
          <div className={styles["layout-route-view"]}>
            <DynamicRoutes/>
          </div>
        </div>
        <Footer/>
      </div>
  );

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {layout}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

