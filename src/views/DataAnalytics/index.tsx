import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Balance, ActionButton, Header } from '../../components';
import { Send,Receive, MultiSend, Arrow } from '../../assets/img';
import BankAccounts  from './Accounts';
import ProfitAndLost from './Balances';
import './styles.scss';
import Chart from 'chart.js';

const DataAnalytics: FC<RouteComponentProps> = () => {

  var chartRef: any = React.createRef();
  var chartRefLine: any = React.createRef();
  var chartRefPie: any = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    const myChartRefLine = chartRefLine.current.getContext('2d');
    const myChartRefPie = chartRefPie.current.getContext('2d');
    const opts = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent'
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'transparent'
        },
          ticks: {
              beginAtZero: true
          }
        }]
      }
    }

    const optsPie = {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70,
      rotation: 1
    }
    
    var myObjBar = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Money in',
            data: [55, 25, 42, 20, 50, 40, 33, 25, 47, 29, 40, 55],
            backgroundColor: [ '#FF8008', '#FF8008', '#FF8008', '#FF8008','#FF8008', '#FF8008', '#FF8008','#FF8008','#FF8008','#FF8008','#FF8008','#FF8008'],
            borderColor: ['#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837','#FFC837'],
            borderWidth: 1
        },
        {
          label: 'Money out',
          data: [40, 45, 40, 48, 25, 45, 35, 20, 15, 20, 45, 50],
          backgroundColor: ['#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B','#03629B'],
          borderColor: ['#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4','#008DE4'],
          borderWidth: 1
        },
      
        ]
      },
      options: opts
    }

    new Chart(myChartRefLine, {
      type: 'line',
      data: {labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
            {
                label: "Sales",
                borderColor: "#35A7D6",
                backgroundColor: "rgba(92, 214, 177, 0.63)",
                data: [58, 40, 20, 35, 45, 50, 40, 50, 40, 40, 20, 30],
                fill: true,
                lineTension: 0.6,
                pointBackgroundColor: "#35A7D6",
                pointRadius: 1,
                spanGaps: false
            }
        ]},
      options: opts
    });

    var myPieData = {
      datasets: [{
        backgroundColor: ['#FFC837', '#00B4DB', '#5CD6B1'],
        data: [10, 20, 30]
    }],
      labels: [
          'Bill',
          'Employees',
          'Others'
      ]
    }

    new Chart(myChartRefPie, {
      type: 'pie',
      data: myPieData,
      options: optsPie
    });
    
    new Chart(myChartRef, myObjBar);
  }, []);

  return (
  <div className="_principalContainer">

    <div className="_topGraphics">
        <Balance />
        <div className="_options">
          <ActionButton url={"/payments/send/"} img={<Send />} title={"Send"} />
          <ActionButton url={"/payments/receive/wallet"} img={<Receive />} title={"Recieve"} />
          <ActionButton
            url={"/payments/multisend"}
            img={<MultiSend />}
            title={"Multi send"}
          />
        </div>
      {/* <div className="_buttonAction">
        <ActionButton url={'dashboard'} img={<Send />} title={'Send'} />
      </div>
      <div className="_buttonAction">
        <ActionButton url={'dashboard'} img={<Receive />} title={'Recieve'} />
      </div>
      <div className="_buttonAction">
        <ActionButton url={'dashboard'} img={<MultiSend />} title={'Multi send'} />
      </div> */}
    </div>

    <div className="_parentGraphic">
      
      <div className="_row">
        <div className="_graphicContainer _left">
          <p className="_textUSDC">USDC</p>
          <div>
            <canvas 
              width="100%"
              height="200px"
              id="myChart"
              ref={chartRef}
            />
          </div>
          <button className="_filterButton">
            <div>This year</div>
            <Arrow />
          </button>
        </div>
        <div id="_bankAccount" className="_graphicContainer">
          <BankAccounts />
        </div>
      </div>

      <div className="_row">
        <div className="_left _bottom">
          <div id="_lines" className="_graphicContainer">
            <p className="_textUSDC">Sales USDC</p>
            <div style={{height: '100%'}}>
              <canvas 
                width="100%"
                height="200px"
                id="myLineChart"
                ref={chartRefLine}
              />
            </div>
            <button className="_filterButton">
              <div>This year</div>
              <Arrow />
            </button>
          </div>
          <div id="_cake" className="_graphicContainer">
            <p className="_textUSDC">Expenses</p>
            <p className="_textUSDC" style={{top: '10%'}}>USDC</p>
            <div style={{height: '100%'}}>
              <canvas 
                width="100%"
                height="200px"
                id="myLineChart"
                ref={chartRefPie}
              />
            </div>
          </div>
        </div>
        <div id="_profitAndLost" className="_graphicContainer">
          <ProfitAndLost />
        </div>
      </div>
    </div>
  </div>
  )
}

export default DataAnalytics;