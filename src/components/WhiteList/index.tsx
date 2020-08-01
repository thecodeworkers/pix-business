import React from 'react';
import { List } from '../../assets/img';
import './styles.scss';

const WhiteListButton = () => {
  return (
    <button className='_whiteListButton'> <div className='_listSize'><List/></div>  White list</button>
  )
};

export default WhiteListButton;