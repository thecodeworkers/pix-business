import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import Balance from '../../components/Balance';
import './styles.scss';

const DataAnalytics: FC<RouteComponentProps> = () => (
  <div>
    <div className="_balancecont">
      <Balance />
    </div>
  </div>
)

export default DataAnalytics;