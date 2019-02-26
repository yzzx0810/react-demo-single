import React from 'react';
import ReactDOM from 'react-dom';

import 'lib-flexible';
import {Provider} from 'react-redux';
import store from './src/store/test';
import App from './src/views/app/app.jsx';


ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
);