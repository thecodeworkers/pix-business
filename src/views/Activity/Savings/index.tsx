import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import { connect } from 'react-redux';

const Savings: FC<RouteComponentProps | any> = ({ activity }) => (
  <DynamicTable 
    keys={['status', 'account', 'date', 'counterparty', 'type', 'address', 'amount', 'balance']} 
    records={activity.activities.filter((activity: any) => activity.account.toLowerCase() == 'saving')}
  />
);

const mapStateToProps = ({ activity }: any) => ({ activity });

export default connect(mapStateToProps)(Savings);
