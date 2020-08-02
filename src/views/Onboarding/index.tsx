import React, { useEffect } from 'react';
import { Router, navigate } from '@reach/router';
import Login from '../Login';
import Register from '../Register';
import { connect } from 'react-redux';
import { Props } from './interface';

const Onboarding = ({ commerce }: Props) => {
  useEffect(() => {
    if(!commerce.commerce) navigate('/register');
  }, []);

  return (
    <Router>
      <Login path="/"/>
      <Register path="/register"/>
    </Router>
  );
}

const mapStateToProps = ({ commerce }: Props) => ({ commerce });

export default connect(mapStateToProps)(Onboarding);
