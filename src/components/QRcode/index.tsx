import React from 'react';
import QRCode from 'qrcode.react';
import './styles.scss';

const CodeQR = (props: any) => {
  const { wallet } = props;

  return (
    <div className='_qrCode'>
      <QRCode value={wallet} bgColor='rgba(0,0,0,0)' renderAs='svg'/> 
    </div> 
  )
};

export default CodeQR;