import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable, CountBar } from '../../../components';
import { CartDown, CartUp } from '../../../assets/img';
import './styles.scss';

const dataTest = { 
  keys: ['date', 'type', 'invoice', 'customer', 'memo', 'balance', 'status'],
  // temporary example data
  records: new Array(5).fill(0)
};

const Sales: FC<RouteComponentProps | any> = ({ sales }) => {
  return (
    <div>
      <div className='_colorBar'></div>
      <div className="_productServicesCounters">
        <CountBar label="Most Sold Product" title="Holy Chicken" counter={40} icon={<CartUp />} percentage={'0.00%'} />
        <CountBar label="Least Sold Product" title="Tenders" counter={60} icon={<CartDown />} percentage={'0.00%'} color={'red'} />
      </div>
      <DynamicTable keys={ dataTest.keys } records={ sales } />
    </div>
  );
}

export default Sales;
