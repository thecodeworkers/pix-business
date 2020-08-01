import React from 'react';
import { DynamicTable } from '../../../components';

const BankAccounts = () => (
  <div>
    <div className="_bankAccountTitle">
      <p>Bank account</p>
    </div>
    <DynamicTable keys={['Name', 'Address', 'Balance']} records={[]} />
  </div>
);

export default BankAccounts;