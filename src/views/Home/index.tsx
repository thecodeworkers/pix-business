import React from 'react';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import { Router } from '@reach/router';
import { SideBar, Header } from '../../components';
import './styles.scss';
import Payment from '../Payment';
import DataAnalytics from '../DataAnalytics';

export default () => (
  <div className="_parentcont">
    <SideBar/>
    <div className="_dcontainer">
      <Header />
      <Router>
        <Dashboard path="/dashboard"/>
        <Profile path="/profile"/>
        <DataAnalytics path="/data-analitycs/"/>
        <Payment path='/payments/*' />
      </Router>   
    </div>
  </div>
);
