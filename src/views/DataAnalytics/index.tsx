import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { Balance, ActionButton, Header } from '../../components';
import { Send,Receive, MultiSend } from '../../assets/img';
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
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      }
    }
    
    var myObj = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Money in',
            data: [80, 25, 85, 20, 80, 40],
            backgroundColor: [
                '#FF8008',
                '#FF8008',
                '#FF8008',
                '#FF8008',
                '#FF8008',
                '#FF8008',
            ],
            borderColor: [
                '#FFC837',
                '#FFC837',
                '#FFC837',
                '#FFC837',
                '#FFC837',
                '#FFC837',
            ],
            borderWidth: 1
        },
        {
          label: 'Money out',
          data: [40, 45, 40, 80, 25, 60],
          backgroundColor: [
            '#03629B',
            '#03629B',
            '#03629B',
            '#03629B',
            '#03629B',
            '#03629B',
          ],
          borderColor: [
            '#008DE4',
            '#008DE4',
            '#008DE4',
            '#008DE4',
            '#008DE4',
            '#008DE4',
          ],
          borderWidth: 1
        },
      
        ]
      },
      options: opts
    }

    var myLineObj = new Chart(myChartRefLine, {
      type: 'line',
      data: {labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
            {
                label: "Sales",
                data: [4010, 3600, 2900, 3550, 3800, 2900, 3000, 3500, 4000, 3700, 3550, 3800],
                fill: false,
                borderColor: "#6610f2"
            },
            {
                label: "National Average",
                data: [500, 390, 670, 600, 780, 440, 600, 680, 550, 475, 700, 795],
                fill: false,
                borderColor: "#E0E0E0"
            }
        ]},
      options: opts
    });

    var myPieData = {
      datasets: [{
        data: [10, 20, 30]
    }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
    }

    var myPieChart = new Chart(myChartRefPie, {
      type: 'pie',
      data: myPieData,
      options: opts
    });
    
    new Chart(myChartRef, myObj);
  }, []);

  return (
  <div className="_principalContainer">
    <Header tabs={true} />
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
        <div className="_graphicContainer _left">
          <canvas 
            width="100%"
            height="200px"
            id="myChart"
            ref={chartRef}
          />
        </div>
        <div id="_bankAccount" className="_graphicContainer"></div>
      </div>

      <div className="_row">
        <div className="_left _bottom">
          <div id="_lines" className="_graphicContainer">
            <canvas 
              width="100%"
              height="200px"
              id="myLineChart"
              ref={chartRefLine}
            />
          </div>
          <div id="_cake" className="_graphicContainer">
            <canvas 
              width="100%"
              height="200px"
              id="myLineChart"
              ref={chartRefPie}
            />
          </div>
        </div>
        <div id="_profitAndLost" className="_graphicContainer"></div>
      </div>
    </div>
  </div>
  )
}

export default DataAnalytics;