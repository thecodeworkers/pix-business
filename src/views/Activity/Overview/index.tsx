import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DynamicTable } from '../../../components';
import { connect } from 'react-redux';

const Overview: FC<RouteComponentProps | any> = ({ activity }) => (
  <DynamicTable 
    keys={['status', 'account', 'date', 'counterparty', 'type', 'address', 'amount', 'balance']} 
    records={activity.activities}
    extraProps={{ status: 'bold' }}
  />
);

const mapStateToProps = ({ activity }: any) => ({ activity });

export default connect(mapStateToProps)(Overview);
