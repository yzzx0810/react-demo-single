import * as ActionTypes from '../actionType/user';

export const login = (loginInfo) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: loginInfo
  }
};
