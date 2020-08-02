import React from 'react';
import { List } from '../../assets/img';
import './styles.scss';

const WhiteListButton = (props: any) => {
  const { action } = props;
  
  return (
    <button onClick={action} className='_whiteListButton' > <div className='_listSize'><List/></div>  White list</button>
  )
};

export default WhiteListButton;