import React from "react";
import { FaPlus } from "react-icons/fa";
import "./styles.scss";

const NewAccountCard = () => {
  return (
    <div className="_new_account">
      <a className="_btn">
        <FaPlus color="#FFFFFF" size="18" />
        Add New
      </a>
      <p>Add a new checking account</p>
    </div>
  );
};

export default NewAccountCard;
