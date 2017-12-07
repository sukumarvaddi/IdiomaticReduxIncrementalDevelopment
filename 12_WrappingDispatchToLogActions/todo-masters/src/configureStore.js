/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */
import { createStore } from 'redux';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage'
import throttle from 'lodash/throttle'


const addLoggingToDispatch = (store) =>{
  const rawDispatch = store.dispatch;

  if(!console.group){
    return rawDispatch;
  }

  return (action )=>{

    console.group(action.type)
    console.log('%c Prev State', 'color:gray', store.getState());
    console.log('%c Action', 'color:blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c Next State','color:green' ,store.getState());
    console.groupEnd(action.type)

    return returnValue;
  }

}

const configureStore = () => {

  const persistedState = loadState()

  const store = createStore(todoApp, persistedState);

  if(process.env.NODE_ENV !== 'production'){
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
    saveState({todos:store.getState().todos});
  },1000));
  return store
}

export default configureStore
