import React from "react";
import "./styles.scss";

const AccountCard = (props: any) => {
  return (
    <div className="_account">
      <div className="_decorator">X</div>
      <div className="_img" />
      <div className="_info">
        <p className="_title">{props.data.title}</p>
        <p className="_desc">{props.data.desc}</p>
      </div>
      <div className="_balance">
        <p className="_percent">{props.data.percent}</p>
        <p className="_value">{props.data.value}</p>
        <p className="_total">{props.data.total}</p>
      </div>
    </div>
  );
};

export default AccountCard;
