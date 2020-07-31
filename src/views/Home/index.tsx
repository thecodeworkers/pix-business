import React from 'react';
import Dashboard from '../Dashboard';
import { Router } from '@reach/router';
import { SideBar, Header } from '../../components';
import './styles.scss';
import DataAnalytics from '../DataAnalytics';

export default () => (
  <>
    <div className="_parentcont">
      <SideBar/>
      <div className="_dcontainer">
        <Header />
        <Router>
          <Dashboard path="/dashboard"/>
          <DataAnalytics path="/data-analitycs/"/>
        </Router>   
      </div>
    </div>
  </>
);
