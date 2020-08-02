import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import './styles.scss';

const dataTest = { 
  keys: ['Date', 'Invoice', 'Payee', 'Category', 'Memo', 'Total', 'Action'],
  // temporary example data
  records: new Array(10).fill(0)
};

const Expenses: FC<RouteComponentProps> = () => (
  <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
);

export default Expenses;