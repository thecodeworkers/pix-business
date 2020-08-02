import React, { FC, useEffect, useState } from "react";
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
  PixelTitle
} from "../../components";
import { Send, Receive, MultiSend } from "../../assets/img";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decideNavigation } from '../../store/actions';

const activityKeys = [
  "status",
  "counterparty",
  "type",
  "address",
  'amount'
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

const cpKeys = ["counterparty", "email", "address"];

const Dashboard: FC<RouteComponentProps | any> = ({ activity, counterparty, wallet, action }) => {
  const [activities, setActivities] = useState([]);
  const [counterparties, setCounterparties] = useState([]);

  useEffect(() => {
    setActivities(activity.results);
    setCounterparties(counterparty.results);

    return () => {
      setActivities([]);
      setCounterparties([]);
    }
  }, []);

  return (
    <div id="dashboard">
      <Balance />
      <div className="_options">
        <ActionButton url={"/payments/send/"} img={<Send />} title={"Send"} decide={action.decideNavigation} />
        <ActionButton url={"/payments/receive/wallet"} img={<Receive />} title={"Recieve"} />
        <ActionButton
          url={"/payments/multisend"}
          img={<MultiSend />}
          title={"Multi send"}
        />
      </div>
  
      <ListAccountCard data={wallet.wallets} />
  
      <div className="_activity" style={{marginTop: '-15rem'}}>
        <PixelTitle title="Activity" />
        <DynamicTable keys={activityKeys} records={activities.reverse()} />
      </div>
  
      <div className="_counterparties">
        <PixelTitle title="Counterparties" />
        <DynamicTable keys={cpKeys} records={counterparties.reverse()} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ activity, counterparty, wallet }: any) => ({ activity, counterparty, wallet });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    decideNavigation
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
