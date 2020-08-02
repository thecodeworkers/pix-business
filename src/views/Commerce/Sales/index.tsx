import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable, CountBar } from '../../../components';
import { CartDownload } from '../../../assets/img';
import './styles.scss';

const dataTest = { 
  keys: ['Date', 'Type', 'Invoice', 'Customer', 'Memo', 'Balance', 'Status', 'Action'],
  // temporary example data
  records: new Array(5).fill(0)
};

const Sales: FC<RouteComponentProps> = () => {
  return (
    <div>
      <div className='_colorBar'></div>
      <div className="_productServicesCounters">
        <CountBar label="Most Sold Product" title="Holy Chicken" counter={40} icon={<CartDownload />} percentage={'0.00%'} />
        <CountBar label="Least Sold Product" title="Tenders" counter={60} icon={<CartDownload />} percentage={'0.00%'} />
      </div>
      <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
    </div>
  );
}

export default Sales;