import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Balance, ActionButton } from '../../components';
import { Send,Receive, MultiSend } from '../../assets/img';
import './styles.scss';

const DataAnalytics: FC<RouteComponentProps> = () => (
  <div className="_principalContainer">
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
    <div className="_parentGraphic">
      
      <div className="_row">
        <div className="_graphicContainer _left"></div>
        <div id="_bankAccount" className="_graphicContainer"></div>
      </div>

      <div className="_row">
        <div className="_left _bottom">
          <div id="_lines" className="_graphicContainer"></div>
          <div id="_cake" className="_graphicContainer"></div>
        </div>
        <div id="_profitAndLost" className="_graphicContainer"></div>
      </div>
    </div>
  </div>
)

export default DataAnalytics;