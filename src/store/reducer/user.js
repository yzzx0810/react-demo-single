import * as ActionTypes from '../actionType/user'

const initialState = {
  userInfo: {
    u_name: '',
    u_pwd: ''
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.USER_LOGIN:
      return Object.assign({}, state, {userInfo: payload});
    default:
      return state
  }
};

export default reducer;
