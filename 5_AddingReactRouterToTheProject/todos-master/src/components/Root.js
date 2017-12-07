/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */
import React from 'react'
import App from './App';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

export default Root;