import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, Router, Link } from '@reach/router';
import { InputValue } from '../../../components';
import {
  Commerce,
  BankBlue,
  QrBlue,
  QrWhite,
  CreditCardBlue,
  CreditCardWhite,
} from '../../../assets/img';
import { IconTabs, Summary, AddNew, WhiteListButton, PasteWallet, BankCard} from '../../../components';
import { DownArrow } from '../../../assets/img';
import AccountCard from '../../../components/AccountCard';
import './styles.scss';

const Send: FC<RouteComponentProps> = ({
  location,
  navigate = (nav: any) => { },
}) => {
  useEffect(() => {
    navigate('wallet');
  }, []);

  const [ currentTab, setCurrentTab ] = useState('wallet'); 

  const values = {
    Amount: 12000,
    Fee: 10000,
    Total: 80000,
  };

  const iconTabs = {
    'Wallet or QR Code': {
      route: 'wallet',
      description: 'Receive funds to other USDC address ',
      icon: <QrBlue />,
      iconSelected: <QrWhite />,
    },
    'Bank Account': {
      route: 'bank',
      description: 'Receive funds to your bank account in the US',
      icon: <BankBlue />,
      iconSelected: <Commerce />,
    },
  };

  const data = {
    title: 'Checking account',
    desc: '0x43b9b3e34147857ef928ce13ccdd5193b60fc4ed',
    value: '10,000',
    total: '10,000',
  };

  const ChangeTab = () => {
    currentTab == 'wallet' ? setCurrentTab('bank') : setCurrentTab('wallet')
  }

  const walletInput = (value:any) => {
    console.log(value);
  }

  return (
    <div className='ReceiveContainer'>

      <div onClick={() => ChangeTab()}>
      <IconTabs
        path={location?.pathname.split('/')[3]}
        tabs={iconTabs}
        width='40%'
        height='70px'
      />
      </div>
      
      <div className='_inputsRow'>
        <div className='_amountsTabs'>
          <div className='_largeCard'>
            <button className='_cardButton'>Min</button>
            <button className='_cardButton'>Parcial</button>
            <button className='_cardButton'>Max</button>
          </div>
        </div>

        <div style={{ width: '50%' }}>
          <InputValue defaulValue={0} returnValue={null} />
        </div>
      </div>

      <div className='_fromDiv'>
        <p>From</p>

        <div className='_fakeSelect'>
          select
       <DownArrow />
        </div>

      </div>

      <div className='_rowsCard'>
        <div style={{ width: '45%', marginTop: '20px' }}>
          <AccountCard data={data} width='95%' decorator={false} />
        </div>

        <div style={{ width: '50%' }}>
          <Summary values={values} />
        </div>
      </div>

      <div className='_toContainer'>
        <p>
          To
        </p>
        <div className='_actBtn'>
          <AddNew />
          <div style={{ marginLeft: '0.5rem' }}>
            <WhiteListButton />
          </div>
        </div>
      </div>


      <div className='_lastRow'>
        <div className='_pasteStyles'>

          {
            currentTab == 'wallet' 
            ? <PasteWallet returnValue={walletInput}/>
            : <BankCard />
          }
          
        </div>

        <div>
          <button className='_cancelBtn'> Cancel</button>
          
          <Link to='/confirm-send'>
             <button className='_sendBtn' > Send</button>
          </Link>
          
        </div>

      </div>
    </div>

  )
};

export default Send;