import React from 'react';
import { UsdcCard } from '../../assets/img';
import './styles.scss';

const DestinationAccount = () => {
  return (
    <div className='_destinationCard'>
      <div className='_logoContent'>
        <UsdcCard />
      </div>

      <div className='_dataDestinationCard'>
        <p>Checking account</p>
        <p>*********************1234</p>
      </div>

    </div>
  )
};

export default DestinationAccount;