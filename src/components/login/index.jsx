import React, { useState } from 'react';
import styles from "../../scss/login.scss";

function Login(props) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = () => {
    const {onLogin} = props;
    const userInfo = {
      u_name: userName,
      u_pwd: userPassword
    };
    onLogin(userInfo, loginCallback);
  }

  const loginCallback = () => {
    const {history} = props;
    history.push('/home');
  }

  return (
    <div className={styles.main}>
      <div className={styles.mobile}>
        <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text"/>
      </div>
      <div className={styles.password}>
        <input value={userPassword} onChange={(event) => setUserPassword(event.target.value)} type="password"/>
      </div>
      <div className={styles.login}>
        <button onClick={login}>登录</button>
      </div>
    </div>
  )
}

export default Login
