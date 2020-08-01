import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';

const dataTest = { 
  keys: ['Status', 'Account', 'Counterparty', 'Counterparty', 'Type', 'Address', 'Amount', 'Balance'],
  // temporary example data
  records: new Array(20).fill(0)
};

const Checking: FC<RouteComponentProps> = () => (
  <DynamicTable keys={ dataTest.keys } records={ dataTest.records } />
);

export default Checking;