/**
 * Created by svaddi_July_1_2015 on 9/23/16.
 */
import { createStore } from 'redux';
import todoApp from './reducers';


const promise = (store) => (next) =>  (action) => {
  if(typeof action.then === 'function'){
    return action.then(next)
  }
  return next(action);
}




const logger = (store) =>(next) =>{
  if(!console.group){
    return next;
  }
  return (action )=>{
    console.group(action.type)
    console.log('%c Prev State', 'color:gray', store.getState());
    console.log('%c Action', 'color:blue', action);
    const returnValue = next(action);
    console.log('%c Next State','color:green' ,store.getState());
    console.groupEnd(action.type)

    return returnValue;
  }
}


const wrapDispatchWithMiddleWares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  );
}

const configureStore = () => {

  const store = createStore(todoApp);

  const middlewares = [promise]

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger)
  }

  wrapDispatchWithMiddleWares(store, middlewares);
  return store
}

export default configureStore
