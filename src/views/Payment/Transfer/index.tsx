import React, { FC } from 'react';
import { RouteComponentProps, Router, Link } from '@reach/router';
import { InputValue, AccountCard, Summary} from '../../../components';
import { DownArrow } from '../../../assets/img';
import TransferMain from './Main';
import TransferDetails from './Details';
import './styles.scss';

const Transfer: FC<RouteComponentProps> = (props: any) => {
  
  return (
    <div>
      <Router>
        <TransferMain path="/" default />
        <TransferDetails path="/details" />
      </Router>
    </div>

  )
}

export default Transfer;
