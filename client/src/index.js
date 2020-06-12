import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware (
  promiseMiddleware,
  ReduxThunk
) (createStore);

ReactDOM.render (
  
   <BrowserRouter>
   <App />
 </BrowserRouter>,
  document.getElementById ('root')
);


