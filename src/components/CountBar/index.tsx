import React, { FC } from 'react';
import { Props } from './interface';
// import styled from 'styled-components';
import './style.scss';

const CountBar: FC<Props> = ({ label, title, percentage, counter, icon, number, color}) => (


  <div className="_countBarContainer">
    <div className="_countBarContent1">
      <span className="_countBarLabel"> { label } </span>
      <span className={color == 'red' ? '_countBarTitleRed _countBarTitle' : '_countBarTitleYellow _countBarTitle' }> { title } </span>
      <span className="_countBarPercent">{ percentage }</span>
    </div>
    <div className="_countBarContent2">
      <div className="_icon">{icon}</div>
      <div className="_bigNumber">{number}</div>
      <div className="_progressBar" >
        <div className="_progressContainer">
          <div className={color == 'red' ? '_progressBarRed _internProgress' : '_progressBarYellow _internProgress' } style={{width: counter+'%'}}></div>
        </div>
        {/* <progress max="100" value={ counter } ></progress> */}
      </div>
    </div>
  </div>
)



export default CountBar;