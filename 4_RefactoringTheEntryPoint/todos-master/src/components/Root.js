/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */
import React from 'react'
import App from './App';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;