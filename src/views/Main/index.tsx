import React from 'react';
import { Router } from '@reach/router';
import Login from '../Login';
import Home from '../Home';
import './styles.scss';
import { SideBar } from '../../components/index'; 

export default () => {
  const isAuth = true;
  return (
    <>
      {
        isAuth ? (
          <Home/>
        ) : (
          <Router>
            <Login path="/"/>
          </Router>
        )
      }
    </>
  );
}
