import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import './styles.scss';

const dataTest = { 
  keys: ['Name', 'Sku', 'Tag', 'Description', 'Self Price', 'Cost', 'Quantity', 'Action'],
  // temporary example data
  records: new Array(5).fill(0)
};

const ProducsServices: FC<RouteComponentProps> = () => {
  return (
    <div>
      <div>
        progress components
      </div>
      <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
    </div>
  );
}

export default ProducsServices;