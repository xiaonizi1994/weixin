import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import {Provider} from 'react-redux';
import RouterApp from './router';
import configureStore from './store';
// Render the main component into the dom

const store=configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>
,
  document.getElementById('app'));
