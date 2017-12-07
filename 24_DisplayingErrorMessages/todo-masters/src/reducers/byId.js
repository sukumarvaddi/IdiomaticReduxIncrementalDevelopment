/**
 * Created by svaddi_July_1_2015 on 9/30/16.
 */

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      const nextState = {...state}
      action.response.forEach(todo =>{
        nextState[todo.id] = todo;
      })
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];