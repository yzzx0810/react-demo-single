import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from '../home/home.jsx';
import Login from '../login/login.jsx';

class App extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </Router>
        )


    }
}

export default App