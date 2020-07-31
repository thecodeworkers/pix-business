import React from 'react';
import Dashboard from '../Dashboard';
import { Router } from '@reach/router';
import { SideBar } from '../../components';

export default () => (
  <>
  <SideBar/>
  <Router>
    <Dashboard path="/dashboard"/>
  </Router>   
  </>
);
