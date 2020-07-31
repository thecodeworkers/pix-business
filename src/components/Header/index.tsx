import React from 'react';
import './styles.scss';
import {Notification, User} from '../../assets/img';

const Header = () => {
  return (
    <div className="_container">
      <div className="_enterprise _subcontainer">
        <div className="_image">
          <img src="https://loremflickr.com/50/40" alt="_icon" />
        </div>
        <div className="_text">Holy chicken</div>
      </div>
      <div className="_actions _subcontainer">
        <div className="_icon"><Notification color='#c9c9c9' width='22' height='27' /></div>
        <div className="_icon"><User bcolor='none' color='#c9c9c9' width='22' height='27'/></div>
      </div>
    </div>
  )
}

export default Header;
