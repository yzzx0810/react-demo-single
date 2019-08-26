import * as ActionTypes from '../actionType/counter';

export const addCount = (num) => {
  return {
    type: ActionTypes.ADD_COUNT,
    payload: num
  }
};

export const subCount = (num) => {
  return {
    type: ActionTypes.SUB_COUNT,
    payload: num
  }
};
