import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import { Balance , Header} from "../../components";
import ListAccountCard from "../../components/ListAccountCard";

const listAccount = [
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "$12,000.00",
    total: "10,000.00 USDC",
  },
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "$12,000.00",
    total: "10,000.00 USDC",
  },
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "$12,000.00",
    total: "10,000.00 USDC",
  },
];

const Dashboard: FC<RouteComponentProps> = () => (
  <div id="dashboard">
    <Header tabs={false} />
    <Balance />

    <div id="options">Options</div>

    {/* <ListAccountCard data={listAccount} /> */}

    <div id="activity">Activity</div>

    <div id="counterparties">Counterparties</div>
  </div>
);

export default Dashboard;
