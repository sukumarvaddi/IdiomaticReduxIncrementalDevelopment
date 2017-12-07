/**
 * Created by svaddi_July_1_2015 on 9/30/16.
 */

const byId = (state = {}, action) => {
  if(action.response){
    return {...state, ...action.response.entities.todos};
  }
  return state;
};

export default byId;

export const getTodo = (state, id) => state[id];