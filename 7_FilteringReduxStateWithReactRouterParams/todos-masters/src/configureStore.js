/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */
import { createStore } from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage'
import throttle from 'lodash/throttle'

const configureStore = () => {

  const persistedState = loadState()

  const store = createStore(todoApp, persistedState);


  store.subscribe(throttle(() => {
    saveState({todos:store.getState().todos});
  },1000));
  return store
}

export default configureStore
