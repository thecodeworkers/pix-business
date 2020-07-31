import React from 'react';
import { Router, Link } from '@reach/router';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Commerce from '../Commerce';
import './styles.scss';

export default () => {
  return (
    <Router>
      <Login path="/"/>
      <Dashboard path="/dashboard"/>
      <Commerce path="/commerce"/>
    </Router>
  );
}
