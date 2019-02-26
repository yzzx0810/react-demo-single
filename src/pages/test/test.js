import React from 'react';
import ReactDOM from 'react-dom';

import 'lib-flexible';
import {Provider} from 'react-redux';
import store from '../../store/test';
import App from './views/app/app.jsx';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);