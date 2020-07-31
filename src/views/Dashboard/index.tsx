import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Header } from "../../components";
import './styles.scss'

const Dashboard: FC<RouteComponentProps> = () => (
  <div>
    <section className="_dcontainer">
      <Header />
      <div>Dashboard</div>
    </section>
  </div>
);

export default Dashboard;
