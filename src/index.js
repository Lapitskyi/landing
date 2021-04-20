import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppContainer from './AppContainer';
import store from './redux/store-redux';
import StoreContext from './store/StoreContext';
import storeT from './store/storeT';

import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <StoreContext.Provider value={storeT}>
          <AppContainer storeT={storeT} />
        </StoreContext.Provider>
      </Provider>
    </React.StrictMode>
    ,
  </BrowserRouter>, document.getElementById('root')
);
reportWebVitals();
