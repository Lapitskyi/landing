import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"
import {Provider} from "react-redux";
import store from "./redux/store";
import storeTable from "./store/store-table";

ReactDOM.render(

  <BrowserRouter>
    <React.StrictMode>
        <Provider store={store} >
            <App storeTable={storeTable}/>
        </Provider>
    </React.StrictMode>,
  </BrowserRouter>,document.getElementById('root')
);
reportWebVitals();
