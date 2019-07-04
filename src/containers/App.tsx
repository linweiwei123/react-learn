import './App.css';
import * as React from 'react';
import HelloContainer from './Hello';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';

const store = createStore(reducers);

store.subscribe(() => {
    console.log(store.getState());
});

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <div className="App">
            <HelloContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;

