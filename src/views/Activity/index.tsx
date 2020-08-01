import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Header, DynamicTable, ExportButton, Tabs } from '../../components';
import './styles.scss';

// temporary example data
const dataTest = { 
  keys: ['Status', 'Account', 'Counterparty', 'Counterparty', 'Type', 'Address', 'Amount', 'Balance'],
  records: new Array(20).fill(0)
};

const activityTabs = {
  Overview: { route: 'overview' },
  Checking: { route: 'checking' },
  Savings: { route: 'saving' }
};

const Activity: FC<RouteComponentProps> = () => (
  <div className='_activityContainer'>
    <Header />
    
    <div className='_activityContent'>
      <div className='_activityLabel'>Activity</div>
      <div className='_activityOptions'>
        <Tabs tabs={ activityTabs } />
        <ExportButton />
      </div>
      <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
    </div>
  </div>
);

export default Activity;