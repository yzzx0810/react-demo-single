import * as ActionTypes from '../actionType/counter'

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_COUNT:
      return Object.assign({}, state, {
        count: state.count + payload
      });
    case ActionTypes.SUB_COUNT:
      return Object.assign({}, state, {
        count: state.count - payload
      });
    default:
      return state
  }
};

export default reducer;
