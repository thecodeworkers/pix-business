import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import { connect } from 'react-redux';

const Checking: FC<RouteComponentProps | any> = ({ activity }) => (
  <DynamicTable 
    keys={['status', 'account', 'date', 'counterparty', 'type', 'address', 'amount', 'balance']} 
    records={activity.activities.filter((activity: any) => activity.account.toLowerCase() == 'checking')}
  />
);

const mapStateToProps = ({ activity }: any) => ({ activity });

export default connect(mapStateToProps)(Checking);

