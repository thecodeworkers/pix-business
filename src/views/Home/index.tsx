import React from 'react';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import { Router } from '@reach/router';
import { SideBar } from '../../components';
import './styles.scss';
import Payment from '../Payment';
import DataAnalytics from '../DataAnalytics';
import Activity from '../Activity';
import  CounterParties from '../CounterParties';

export default () => (
  <div className="_parentcont">
    <SideBar/>
    <div className="_dcontainer">
      <Router>
        <Dashboard path="/dashboard"/>
        <Profile path="/profile"/>
        <DataAnalytics path="/data-analitycs/"/>
        <Payment path='/payments/*' />
        <Activity path='/activity' />
        <CounterParties path='/counterparties' />
      </Router>   
    </div>
  </div>
);
