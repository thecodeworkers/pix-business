import React from "react";
import "./styles.scss";

import AccountCard from "../AccountCard";
import NewAccountCard from "../NewAccountCard";

const ListAccountCard = (props: any) => {
  return (
    <div className="_list-account">
      {props.data.map((card: any) => (
        <AccountCard data={card} />
      ))}
      <NewAccountCard />
    </div>
  );
};

export default ListAccountCard;
