// import { UsdcCard } from '../../assets/img';
import React, { FC } from 'react';
import { Props } from './interface';
import './style.scss';

const CountBar: FC<Props> = ({ label, title, counter}) => (
  <div className="_countBarContainer">
    <div className="_countBarContent1">
      <span className="_countBarLabel"> { label } </span>
      <span className="_countBarTitle"> { title } </span>
    </div>
    <div className="_countBarContent2">
      <progress max="100" value={ counter } ></progress>
    </div>
  </div>
)

export default CountBar;