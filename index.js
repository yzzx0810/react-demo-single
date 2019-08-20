import React from 'react';
import ReactDOM from 'react-dom';

import 'lib-flexible';
import {Provider} from 'react-redux';
import store from './src/store';
import RouterCore from './src/router/index.jsx';

ReactDOM.render(
  <Provider store={store}>
    <RouterCore/>
  </Provider>,
  document.getElementById('root')
);
