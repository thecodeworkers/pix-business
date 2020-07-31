import React from 'react';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import { Router } from '@reach/router';
import { SideBar, Header } from '../../components';
import './styles.scss';

export default () => (
  <>
    <div className="_parentcont">
      <SideBar/>
      <div className="_dcontainer">
        <Header />
        <Router>
          <Dashboard path="/dashboard"/>
          <Profile path="/profile"/>
        </Router>   
      </div>
    </div>
  </>
);
