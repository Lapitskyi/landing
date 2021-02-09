import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>,
  </BrowserRouter>,

  document.getElementById('root')
);
reportWebVitals();
