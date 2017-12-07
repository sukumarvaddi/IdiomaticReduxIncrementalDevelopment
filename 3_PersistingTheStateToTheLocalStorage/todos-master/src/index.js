import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage'
import App from './components/App';
import throttle from 'lodash/throttle'


const persistedState = loadState()

const store = createStore(todoApp, persistedState);


store.subscribe(throttle(() => {
  saveState({todos:store.getState().todos});
},1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
