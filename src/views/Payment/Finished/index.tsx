import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { Header, Summary } from '../../../components';
import { Pixel, Check, Usdc } from '../../../assets/img';
import './styles.scss';

const TransactionCompleted: FC<RouteComponentProps> = (props:any) => {

  const values = {
		Amount: 12000,
		Fee: 10000,
		Total: 80000,
  };
  
  return (
    <div>
      <div className="_transactionCompletedContainer">
        <div className="_info">
          <div className="_sectionContainer _cuteImage _containerColor">
            <div className="_oneItem">
              <Pixel color={'#2699FB'} width={'120'} height={'88'} />
            </div>
            <div className="_svgImage _oneItem">
              <Check width={'34'} height={'25'} />
            </div>
            <p className="_oneItem">Success</p>
          </div>
          <div className="_sectionContainer _cuteAmount">
            <div className="_containerColor _first">
              <p className="_to">Transfer to</p>
              <p className="_motive">Saving Account</p>
            </div>
            <div className="_containerColor _second">
              <p>0.00</p>
              <div></div>
              <Usdc />
            </div>
            <div className="_containerColor">
              <Summary values={values} />
            </div>
          </div>
        </div>
        <div className="_actionButton">
          <button className="_done" onClick={() => props.navigate('/payments') }><p>Done</p></button>
        </div>
      </div>
    </div>
  )
}

export default TransactionCompleted;