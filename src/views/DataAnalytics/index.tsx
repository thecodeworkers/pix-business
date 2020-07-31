import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Balance, Tabs } from '../../components';
import './styles.scss';

const DataAnalytics: FC<RouteComponentProps> = () => (
  <div>
    <div className="_balancecont">
      <Balance />
      {/* <Tabs /> */}
    </div>
  </div>
)

export default DataAnalytics;