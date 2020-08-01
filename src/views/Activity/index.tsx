import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router, navigate } from '@reach/router';
import { Header, ExportButton, Tabs } from '../../components';
import Overview from './Overview';
import Checking from './Checking';
import Savings from './Savings';
import './styles.scss';


const Activity: FC<RouteComponentProps> = ({ location, navigate = (nav: any) => {} }) => {

  useEffect(() => {
		navigate('overview');
	}, []);

  const activityTabs = {
    Overview: { route: 'overview' },
    Checking: { route: 'checking' },
    Savings: { route: 'savings' }
  };

  return (
    <div className='_activityContainer'>
      <Header />
      
      <div className='_activityContent'>
        <div className='_activityLabel'> Activity </div>
        <div className='_activityOptions'>
          <Tabs tabs={ activityTabs } />
          <div className="_exportOption"> 
            <span className='_exportLabel'> Monthly Report </span>
            <ExportButton />
          </div>
        </div>
  
        <Router>
          <Overview path='/overview' />
          <Checking path='/checking' />
          <Savings path='/savings' />
        </Router>
  
      </div>
    </div>
  );
}

export default Activity;