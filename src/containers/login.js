import {connect} from 'react-redux';

import * as UserActions from '../store/action/user.js';
import Login from '../components/login/index.jsx';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (loginInfo, callBack) => {
      dispatch(UserActions.login(loginInfo));
      callBack();
    }
  }
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Login);

export default LoginContainer;
