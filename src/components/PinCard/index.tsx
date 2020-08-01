import React, { useState } from 'react';
import { PinCircle } from '../../assets/img';
import './styles.scss';

const PinCard = (props: any) => {

  const { returnValue } = props; 
  const [value, setValue] = useState('');

	const Returned = (event: any) => {
		let values = event.target.value;
		setValue(values);
		returnValue(values);
  };
  
  return (
    <div className='_pinCircle'>
      <div className='_circleLogo'>
          <PinCircle />
      </div>
    
      <div>
           <input type='password' value={value} onChange={Returned} className='_inputPin' placeholder='0000'></input>
      </div>
      
    </div>
  )
};

export default PinCard; 