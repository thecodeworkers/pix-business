import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { ExportButton, Tabs,Search } from '../../components';
import { Pixel } from '../../assets/img';
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
      <div className='_activityContent'>
        <div className='_activityLabel'> 
          <p>Activity</p>
          <span> <Pixel width={'30'} height={'17'} color={'white'} /> </span> 
        </div>
        <div className='_activityOptions'>
          <Tabs path={location?.pathname.split('/')[2]} tabs={ activityTabs } />
          <Search filter={''} />
          <div className="_exportOption"> 
            <span className='_exportLabel'> Monthly Report </span>
            <ExportButton />
          </div>
        </div>
        <div className="_activityTabs">
          <Router>
            <Overview path='/overview' />
            <Checking path='/checking' />
            <Savings path='/savings' />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Activity;
