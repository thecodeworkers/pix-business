import React from 'react';
import { BankLogo } from '../../assets/img';
import './styles.scss';
const BankCard = () => {
  return (
    <div className='_cardBankComponent'> 
    <div className='_logoContent'>
    <BankLogo />
    </div>

    <div className='_cardBankText'>
      <p>Checking account</p>
      <p>*********************1234</p>
    </div>
    
    </div>
  )
};

export default BankCard;