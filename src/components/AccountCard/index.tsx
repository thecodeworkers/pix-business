import React, { FC } from "react";
import { BsArrowUpDown } from "react-icons/bs";
import "./styles.scss";
import { Props } from "./interface";

const AccountCard: FC<Props> = ({ data, width = null, decorator = true }) => {
  return (
    <div className="_account" style={width ? { width: width } : {}}>
      {decorator ? (
        <div className="_decorator">
          <BsArrowUpDown color="#5CD6B1" size="20" />
        </div>
      ) : null}
      <div className="_img" />
      <div className="_info">
        <p className="_title">{data.title}</p>
        <p className="_desc">{data.desc}</p>
        <div className="_balance">
          {data.percent ? <p className="_percent">{data.percent}</p> : null}
          {data.value ? <p className="_value">$ {data.value}</p> : null}
          {data.total ? <p className="_total">{data.total} USDC</p> : null}
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
