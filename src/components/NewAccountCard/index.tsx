import React, { FC } from "react";
import { FaPlus } from "react-icons/fa";
import "./styles.scss";
import { connect } from "react-redux";
import { createWallet } from '../../store/actions';
import { bindActionCreators } from "redux";

const NewAccountCard:FC<any> = ({ action }) => {
  return (
    <div className="_new_account" onClick={() => action.createWallet()}>
      <a className="_btn _pointerCardDetail">
        <FaPlus color="#FFFFFF" size="18" />
        Add New
      </a>
      <p className='_rightCardText'>Add a new checking account</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    createWallet
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewAccountCard);
