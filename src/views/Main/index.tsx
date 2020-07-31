import React from 'react';
import { Router } from '@reach/router';
import Login from '../Login';
import Dashboard from '../Dashboard';
import './styles.scss';

export default () => {
  return (
    <Router>
      <Login path="/"/>
      <Dashboard path="/dashboard"/>
    </Router>
  );
}
