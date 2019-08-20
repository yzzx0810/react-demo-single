import React, { useState } from 'react';
import styles from '../../scss/home.scss';
import Counter from "../../modules/counter/index.jsx";

function Home(props) {
  const {value, onIncreaseClick, onDecreaseClick, userInfo} = props;
  return (
    <div>
      <Counter value={value} onDecreaseClick={onDecreaseClick} onIncreaseClick={onIncreaseClick}/>
      <div className={styles.main}>Hello, Welcome React...</div>
      <h1>Hello,{userInfo.u_name} Welcome React...</h1>
    </div>
  )
}

export default Home
