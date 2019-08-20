import {connect} from 'react-redux';

import * as CounterActions from '../store/action/counter.js';
import Home from '../components/home/index.jsx';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    value: state.counterReducer.count,
    userInfo: state.userReducer.userInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => {
      dispatch(CounterActions.addCount(2));
    },
    onDecreaseClick: () => {
      dispatch(CounterActions.subCount(1));
    }
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Home);

export default HomeContainer;
