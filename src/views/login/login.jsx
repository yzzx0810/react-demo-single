import React from 'react';

import styles from '../../scss/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', () => {
            console.log('document');
        }, false);
    }

    goToHome = (event) => {
        event.stopPropagation();//组织目标元素的冒泡事件
        event.nativeEvent.stopImmediatePropagation();// 阻止合成事件与最外层document上的事件间的冒泡
        console.log("go to home");
        this.props.history.push("/home");
    };

    loginEvent = () => {
        console.log("loginEvent");
    };

    render() {

        return (
            <div className={styles.main}>
                <div className={styles.mobile}>
                    <input type="text"/>
                </div>
                <div className={styles.password}>
                    <input type="text"/>
                </div>
                <div className={styles.login} onClick={this.loginEvent}>
                    <button onClick={this.goToHome}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login