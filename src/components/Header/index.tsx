import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <div className="_container">
      <div className="_enterprise _subcontainer">
        <div>
          <img src="https://loremflickr.com/50/50" alt="_icon" />
        </div>
        <div>Holy chicken</div>
      </div>
      <div className="_actions _subcontainer">
        <div>NOTF</div>
        <div>USER</div>
      </div>
    </div>
  )
}

export default Header;
