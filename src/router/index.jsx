import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from '../containers/home.js';
import Login from '../containers/login.js';

function RouterCore(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </Router>
  )
}

export default RouterCore
