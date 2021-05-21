import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppContainer from './AppContainer';
import store from './redux/store-redux';
import state from './redux/state';
import './i18n/index';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer state={state} />
      </Provider>
    </React.StrictMode>
    ,
  </BrowserRouter>, document.getElementById('root')
);
reportWebVitals();
