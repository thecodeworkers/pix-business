import React from 'react';
import Dashboard from '../Dashboard';
// import Profile from '../Profile';
import { Router } from '@reach/router';
import { SideBar, Header } from '../../components';
import './styles.scss';
import Payment from '../Payment';
import DataAnalytics from '../DataAnalytics';
import ConfirmSend from '../Payment/SendConfirm';
import Activity from '../Activity';
import Commerce from '../Commerce'
import TransactionCompleted from '../Payment/Finished';
// import  CounterParties from '../CounterParties';

export default () => (
  <div className="_parentcont">
    <SideBar />
    <div className="_dcontainer">
      <Header tabs={false} />
      <Router>
        <Dashboard path="/"/>
        <DataAnalytics path="/data-analitycs/"/>
        <Payment path='/payments/*' />
        <ConfirmSend path='/confirm-send/*'/>
        <Activity path='/activity/*' />
        <Commerce path='/commerce/*' />
        <TransactionCompleted path='/transaction-completed/*' />
        {/* <CounterParties path='/counterparties' /> */}
      </Router>   
    </div>
  </div>
);
