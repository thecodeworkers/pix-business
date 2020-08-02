import React from 'react';
import { DynamicTable } from '../../../components';
import { Pixel } from '../../../assets/img';
import './styles.scss';

const dataTest = {
  keys: ['Name', 'Address', 'Balance'],
  records: [
    {"Name": "Checking account", "Address": "asDsAsd...", "Balance": "12.000USDC"},
    {"Name": "Checking account", "Address": "asDsAsd...", "Balance": "12.000USDC"}]
}

const BankAccounts = () => (
  <div>
    <div className="_bankAccountTitle">
      <p>Bank account</p>
      <Pixel color={'#ffffff'} width={'22'} height={'14'} />
    </div>
      <DynamicTable keys={ dataTest.keys } records={ dataTest.records } padding={'0'} />
  </div>
);

export default BankAccounts;