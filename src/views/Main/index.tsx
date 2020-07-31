import React from 'react';
import { Router, Link } from '@reach/router';
import Login from '../Login';
import Dashboard from '../Dashboard';
import './styles.scss';
import { SideBar } from '../../components/index'; 

export default () => {
  return (
    <Router>
      <Login path="/"/>
      <Dashboard path="/dashboard"/>
    </Router>
  );
}
