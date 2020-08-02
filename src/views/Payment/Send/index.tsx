import React, { FC, useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { InputValue } from '../../../components';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {
	Commerce,
	BankBlue,
	QrBlue,
	QrWhite,
	BoxCheckedGreen,
	BoxCheckedGray,
} from '../../../assets/img';
import { IconTabs, Summary, AddNew, WhiteListButton, PasteWallet, BankCard, Tool, DynamicTable } from '../../../components';
import { getCounterparties } from '../../../store/actions';
import { DownArrow, Close } from '../../../assets/img';
import AccountCard from '../../../components/AccountCard';
import './styles.scss';
import { StateProps, Props } from './interface';
import { getWallets } from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';

const Send: FC<RouteComponentProps> = (props: any,{
  location, 
  navigate = (nav: any) => { },
}) => {
  useEffect(() => {
    console.log(props);
    navigate('wallet');
  }, []);

  const { counterparty } = props;

  const [currentTab, setCurrentTab] = useState('wallet');
  const [show, setShow] = useState(false);

  const values = {
    Amount: 12000,
    Fee: 10000,
    Total: 80000,
  };

  const dataTable = {
    keys: ['hidden', 'counterparty', 'email', 'address'],
    records: counterparty.counterparties
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

  const walletInput = (value: any) => {
    console.log(value);
  }

  const showModal = () => {
    !show ? setShow(true) : setShow(false)
  }

  const close = () => { 
    setShow(false);
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
            <WhiteListButton action={showModal}/>
          </div>
        </div>
      </div>

      <div className='_lastRow'>
        <div className='_pasteStyles'>

          {
            currentTab == 'wallet'
              ? <PasteWallet returnValue={walletInput} />
              : <BankCard />
          }

        </div>

        <div>
          <button > Cancel</button>

          <Link to='/confirm-send'>
            <button className='_sendBtn' > Send</button>
          </Link>
        </div>

        <div className={show ? '_blur' : '_blurNone'} >
      <div className={show ? '_showTool' : '_noneTool'} >
        <div className='_closeTools' onClick={() => close()}>
          <Close />
         
        </div>
        <div className='_DynamicTableLayOut'>

          <p style={{marginBottom: '20px', textAlign: 'left'}}>Whitelist</p>
          <div className='_whilistStyles'>
          <DynamicTable  keys={dataTable.keys} records={dataTable.records}/>
          </div>

        </div>
      </div>
    </div>

        {/* <Tool show={show} callback={() => showModal()} > </Tool> */}
      </div>
    </div>
  )
};

const mapStateToProps = ({ counterparty }: any) => ({ counterparty });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getCounterparties
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Send);
