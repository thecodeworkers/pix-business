import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";
import {
  Balance,
  ListAccountCard,
  ActionButton,
  DynamicTable,
  PixelTitle,
  Header
} from "../../components";
import { Send, Receive, MultiSend } from "../../assets/img";

const listAccount = [
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "12,000.00",
    total: "10,000.00",
  },
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "12,000.00",
    total: "10,000.00",
  },
  {
    title: "Checking account",
    desc: "0xdwdd8udhqdhiwdidjojd",
    percent: "4%",
    value: "12,000.00",
    total: "10,000.00",
  },
];

const activityKeys = [
  "hidden",
  "status",
  "date",
  "counterparty",
  "type",
  "address",
  "amount",
  "balance",
];

const activityRecord = [
  {
    hidden: <FiArrowUpRight color="#5CD6B1" size="16" />,
    status: "sent",
    date: "12/05/20",
    counterparty: "Employeer",
    type: "Income",
    address: "0xdwdd8u.....",
    amount: "+ 66,245.04 USDC",
    balance: "0.0000000",
  },
  {
    hidden: <FiArrowDownRight color="#5CD6B1" size="16" />,
    status: "Recieve",
    date: "11/05/20",
    counterparty: "supplier",
    type: "Expense",
    address: "0xdwdd8u.....",
    amount: "+ 66,245.04 USDC",
    balance: "0.0000000",
  },
  {
    hidden: <BsFillStopwatchFill color="#FFC837" size="16" />,
    status: "Pending",
    date: "10/05/20",
    counterparty: "customer",
    type: "Payroll",
    address: "0xdwdd8u.....",
    amount: "+ 66,245.04 USDC",
    balance: "0.0000000",
  },
  {
    hidden: <MdClose color="#d52222" size="16" />,
    status: "Cancelled",
    date: "09/05/20",
    counterparty: "customer",
    type: "Sale",
    address: "0xdwdd8u.....",
    amount: "+ 66,245.04 USDC",
    balance: "0.0000000",
  },
];

const cpKeys = ["name", "email", "address"];

const cpRecord = [
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
  {
    name: "Darianna Medina",
    email: "Darianna@gmail.com",
    address: "0xdwdd8u.....",
  },
];

const Dashboard: FC<RouteComponentProps> = () => (
  <div id="dashboard">
    {/* <Header tabs={false} /> */}
    <Balance />

    <div className="_options">
      <ActionButton url={"/dashboard"} img={<Send />} title={"Send"} />
      <ActionButton url={"/dashboard"} img={<Receive />} title={"Recieve"} />
      <ActionButton
        url={"/dashboard"}
        img={<MultiSend />}
        title={"Multi send"}
      />
    </div>

    <ListAccountCard data={listAccount} />

    <div className="_activity">
      <PixelTitle title="Activity" />
      <DynamicTable keys={activityKeys} records={activityRecord} />
    </div>

    <div className="_counterparties">
      <PixelTitle title="Counterparties" />
      <DynamicTable keys={cpKeys} records={cpRecord} />
    </div>
  </div>
);

export default Dashboard;
