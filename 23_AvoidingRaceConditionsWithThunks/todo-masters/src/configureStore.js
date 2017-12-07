/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */

import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import createLogger from 'redux-logger';


const thunk = (store)=>(next) =>(action) =>
  typeof action === 'function'?action(store.dispatch,store.getState):next(action);


const configureStore = () => {
  const middlewares = [thunk]
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger())
  }

  const store = createStore(todoApp, applyMiddleware(...middlewares));
  return store
}

export default configureStore
