import React from 'react';
import { Router } from '@reach/router';
import Login from '../Login';
import Register from '../Register';

export default () => (
  <Router>
    <Login path="/"/>
    <Register path="/register"/>
  </Router>
);
