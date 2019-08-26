import {combineReducers, createStore} from 'redux';

import counterReducer from './reducer/counter';
import userReducer from './reducer/user';

const reducers = combineReducers({
  counterReducer,
  userReducer
});

const store = createStore(reducers);

export default store;

