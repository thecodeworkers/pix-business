import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import './styles.scss';

const dataTest = { 
  keys: ['date', 'invoice', 'payee', 'category', 'memo', 'total'],
  // temporary example data
  records: new Array(10).fill(0)
};

const Expenses: FC<RouteComponentProps | any> = ({ expenses }) => (
  <DynamicTable keys={ dataTest.keys } records={ expenses } />
);

export default Expenses;