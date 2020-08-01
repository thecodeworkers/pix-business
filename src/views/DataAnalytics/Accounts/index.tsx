import React from 'react';
import { DynamicTable } from '../../../components';
import { Pixel } from '../../../assets/img';
import './styles.scss';

const BankAccounts = () => (
  <div>
    <div className="_bankAccountTitle">
      <p>Bank account</p>
      <Pixel color={'#ffffff'} width={'22'} height={'14'} />
    </div>
    <DynamicTable keys={['Name', 'Address', 'Balance']} records={[]} padding={'5px'} />
  </div>
);

export default BankAccounts;