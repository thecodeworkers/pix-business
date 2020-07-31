import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Header } from "../../components";

const Dashboard: FC<RouteComponentProps> = () => (
  <div>
    <Header />
    <div>Dashboard</div>
  </div>
);

export default Dashboard;
