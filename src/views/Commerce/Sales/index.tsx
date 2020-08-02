import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import './styles.scss';

const dataTest = { 
  keys: ['Date', 'Type', 'Invoice', 'Customer', 'Memo', 'Balance', 'Status', 'Action'],
  // temporary example data
  records: new Array(5).fill(0)
};

const Sales: FC<RouteComponentProps> = () => {
  return (
    <div>
      <div>
        progress components
      </div>
      <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
    </div>
  );
}

export default Sales;