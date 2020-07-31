import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Balance, ActionButton } from '../../components';
import { Send,Receive, MultiSend } from '../../assets/img';
import './styles.scss';

const DataAnalytics: FC<RouteComponentProps> = () => (
  <div className="_topGraphics">
    <div className="_balancecont">
      <Balance />
    </div>
    <div className="_buttonAction">
      <ActionButton url={'dashboard'} img={<Send />} title={'Send'} />
    </div>
    <div className="_buttonAction">
      <ActionButton url={'dashboard'} img={<Receive />} title={'Recieve'} />
    </div>
    <div className="_buttonAction">
      <ActionButton url={'dashboard'} img={<MultiSend />} title={'Multi send'} />
    </div>
  </div>
)

export default DataAnalytics;