import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable, CountBar } from '../../../components';
import './styles.scss';
import { Boxchart } from '../../../assets/img';

const dataTest = { 
  keys: ['name', 'sku', 'tag', 'description', 'rate', 'cost', 'quantity'],
  // temporary example data
  records: new Array(5).fill(0)
};

const ProducsServices: FC<RouteComponentProps | any> = ({ products }) => {
  return (
    <div>
      <div className='_colorBar'></div>
      <div className="_productServicesCounters">
        <CountBar label="Products" title="Low Stock" counter={40} icon={<Boxchart />} number={'1'} color={'yellow'} />
        <CountBar label="Products" title="Out of Stock" counter={60} icon={<Boxchart />} number={'2'} color={'red'} />
      </div>
      <DynamicTable keys={ dataTest.keys } records={products} />
    </div>
  );
}

export default ProducsServices;
