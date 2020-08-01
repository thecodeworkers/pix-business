import React, { FC } from 'react';
import { Notification, User, Pixel } from '../../assets/img';
import Tabs from '../Tabs';
import './styles.scss';

const Header = ( props: any = false ) => {

  const minitabs = {
		Banking: { route: 'transfer' },
		"Data Analytics": { route: 'send' },
	};

  return (
    <div className="_container">

      <div className="_enterprise _subcontainer">
        <div className="_image">
          <Pixel />
        </div>
        <div className="_text">Holy chicken</div>
      </div>

      {
        props.tabs ?
        <div className="_tabs">
          <Tabs tabs={minitabs} />
        </div> : null
      } 

      <div className="_actions _subcontainer">
        <div className="_icon"><Notification color='#c9c9c9' width='22' height='27' /></div>
        <div className="_icon"><User bcolor='none' color='#c9c9c9' width='22' height='27'/></div>
      </div>
    </div>
  )
}

export default Header;
