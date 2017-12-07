import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import fetchTodos from '../api';

fetchTodos('all').then(console.log);

const todoApp = combineReducers({
  todos,

});


export const getVisibleTodos = (state, filter) => (
  fromTodos.getVisibleTodos(state.todos, filter)
);

export default todoApp;
