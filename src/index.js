import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import {  createStore } from 'redux'
import middlewares from './middlewares/index'
import reducers from './reducers/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducers, middlewares)
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


