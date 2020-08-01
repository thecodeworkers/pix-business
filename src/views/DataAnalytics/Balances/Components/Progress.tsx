import React from 'react';
import './styles.scss';

const Progress = (props: any) => (
  <div>
    <div className="_cardBackground">
      <div className="_progressBarBack">
        <div className="_progressBlue" style={{width: props.width}}></div>
      </div>
      <p className="_amount">{props.amount} USDC</p>
      <p className="_text">{props.text}</p>
    </div>
  </div>
)

export default Progress;