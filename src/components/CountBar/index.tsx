import React, { FC } from 'react';
import { Props } from './interface';
import './style.scss';

const CountBar: FC<Props> = ({ label, title, percentage, counter, icon, number}) => (
  <div className="_countBarContainer">
    <div className="_countBarContent1">
      <span className="_countBarLabel"> { label } </span>
      <span className="_countBarTitle"> { title } </span>
      <span className="_countBarPercent">{ percentage }</span>
    </div>
    <div className="_countBarContent2">
      <div className="_icon">{icon}</div>
      <div className="_bigNumber">{number}</div>
      <div className="_progressBar">
        <progress max="100" value={ counter } ></progress>
      </div>
    </div>
  </div>
)

export default CountBar;