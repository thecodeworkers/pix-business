import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router"
import { Header, ExportButton, Tabs, DynamicTable, Search, AddNew } from '../../components';
import './styles.scss';

const CounterParties: FC<RouteComponentProps> = () => {

  const dataTest = {
    keys: ['Type', 'Counterparty', 'Address', 'Email', 'Phone', 'Actions'],
    records: new Array(20).fill(0)
  };

  const counterPartiesTabs = {
    All: { route: 'all' },
    Employe: { route: 'employe' },
    Supplier: { route: 'supplier' },
    Customer: { route: 'customer' }
  };

  return (
    <div className='_activityContainer'>

      <div className='_counterpartiesContent'>
        <div className='_counterpartiesOptions'>
        <div className='_counterpartiesLabel'> CounterParties </div>
       <AddNew/>
        </div>
        
        <div className='_counterpartiesOptions'>
          <div className='_optionsTab'>
          <Tabs tabs={counterPartiesTabs} />
          </div>
          <div className="_inline_div">
            <Search filter={''} />
            <div className='_div_shadow'>
              <div className='_timeLabel'>This Month</div>
              <ExportButton />
            </div>
          </div>
        </div>
        <DynamicTable keys={dataTest.keys} records={dataTest.records} />
      </div>
    </div>
  );
}

export default CounterParties;