import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Router, Link, navigate } from '@reach/router';
import { InputValue, AccountCard, Summary} from '../../../components';
import { DownArrow } from '../../../assets/img';
import TransferMain from './Main';
import TransferDetails from './Details';
import './styles.scss';

const Transfer: FC<RouteComponentProps> = (props: any) => {
  useEffect(() => {
    props.navigate('transfer/')
  }, []);
  
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
