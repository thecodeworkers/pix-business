import React from 'react';
import { UsdcCard } from '../../assets/img';
import './styles.scss';
const PasteWallet = () =>{
  return (
    <div className='_cardUsdComponent'>
      <div className='_logoContent'>
        <UsdcCard />
      </div>
      
      <div>
        <p style={{textAlign: 'center'}}>Tap to paste</p>
        <p>0xdwdd8udhqdhiwdidjojdad....</p>   
      </div>
    </div>
  )
};

export default PasteWallet;