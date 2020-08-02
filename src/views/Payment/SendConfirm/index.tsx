import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { Tabs, Balance, Header, DestinationAccount, InputValue, PinCard, Summary } from '../../../components';
import './styles.scss';

const ConfirmSend: FC<RouteComponentProps> = ({
  location,
  navigate = (nav: any) => { },
}) => {
  useEffect(() => {
    navigate('confimr-send');
  }, []);

  const colors: any = [
    { class: '_one1' },
    { class: '_five1' },
    { class: '_two1' },
    { class: '_six1' },
    { class: '_five1' },
    { class: '_four1' },
    { class: '_three1' },
    { class: '_seven1' },
  ];

  const values = {
    Amount: 12000,
    Fee: 10000,
    Total: 80000,
  };


  const tabs = {
    Transfer: { route: 'transfer' },
    Send: { route: 'send' },
    Receive: { route: 'receive' },
    'Multi Send': { route: 'multisend' },
  };

  return (
    <div className="paymentContainer">
      {/* <Header /> */}
      <div className='paymentBanner'>
        <Tabs path={location?.pathname.split('/')[2]} tabs={tabs} />
        <Balance />
      </div>
      <div className='_lineWidth'>
        {colors.map((res: any, index: any) => (
          <div key={index} className={res.class}></div>
        ))}
      </div>
      <div className='_transactionDetail'> Transaction Details</div>

      <p style={{ marginTop: '0.5rem' }}>Destination</p>
      <div className='_destinationRow'>
        <div style={{ width: '40%' }}>
          <DestinationAccount />
        </div>

        <div style={{ width: '55%' }}>
          <InputValue returnValue={null} defaulValue={0} />
        </div>
      </div>

      <p>Enter your 2 step verification code</p>
      <div className='_destinationTwoRow'>
        <div style={{ width: '40%', marginTop: '20px'}}>
          <PinCard />
        </div>

        <div style={{ width: '55%' }}>
          <Summary values={values} />
        </div>
      </div>

      <div className='_buttonsDivContainer'>

        <div className='_btnsEvenly'>
        <button className='_cancelConfirmBtn'>
          Cancel
        </button>

        <Link to='/transaction-completed'>  
          <button className='_sendConfirmBtn'>Send</button>
        </Link>
        </div>

      </div>

    </div>
  )
};

export default ConfirmSend;