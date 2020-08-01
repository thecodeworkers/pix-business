import React from 'react';
import { Arrow } from '../../../assets/img';
import Progress from './Components/Progress';
import './styles.scss';

const colors: any = [
  {class: '_one'},
  {class: '_two'},
  {class: '_three'}
];

const ProfitAndLost = () => (
  <div>
    <div className="_firstRow">
      <p className="_textTitlePL">Profit and Lost</p>
      <button className="_filterButtonPL">
        <div>This month</div>
        <Arrow />
      </button>
    </div>
    <div className='_linePL'>
      {
        colors.map((res: any, index: any) => (
            <div key={index} className={res.class}></div>
          )
        )
      }
    </div>
    <div className="_finalContainer">
      <div className="_netIncomeSummary">
        <p className="_netIncomeText">Net Income</p>
        <div className="_incomeNumbers">
          <p className="_numberText">$ 3,245.04</p>
        </div>
      </div>
      <div className="_netProgressContainer">
        <Progress width={'40%'} text={'Income'} amount={'50.000,00'} />
      </div>
      <div className="_netProgressContainer">
        <Progress width={'70%'} text={'Expenses'} amount={'50.000,00'} />
      </div>
    </div>
  </div>
);

export default ProfitAndLost;
