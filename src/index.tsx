import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './bootstrap/registerServiceWorker';
import AppWrapper from "./bootstrap/Appwrapper";

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
