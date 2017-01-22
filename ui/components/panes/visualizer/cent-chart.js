import React  from 'react';
import './cent-chart.scss';

var Highcharts = require('highcharts');
class ScatterPlotChart extends React.Component {
  constructor(props) {
      super(props);
      this.chart = "";
    }
  componentDidMount() {
    Highcharts.chart('chart', { /*Options*/
      chart : {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'X Versus Y of 8 Samples by BRLMM-P'
      },
      subtitle: {
        text: 'Centrillion Technologies 2017'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Height (cm)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Weight (kg)'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'x:{point.x}, y:{point.y}'
          }
        }
      },
      series: [{
        name: 'AA',
        color: 'rgba(223, 83, 83, .5)',
        data: this.props.data.AA
      }, {
        name: 'AB',
        color: 'rgba(99,255,99, 0.5)',
        data: this.props.data.AB
      }, {
        name: 'BB',
        color: 'rgba(119, 152, 191, .5)',
        data: this.props.data.BB
      }]
    });
  }
  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(props.data.AA);
    this.chart.highcharts().series[1].setData(props.data.AB);
    this.chart.highcharts().series[2].setData(props.data.BB);
  }
  render() {
      return (
        <div>
          <div id='chart'></div>
        </div>
      )
  }
}

export { ScatterPlotChart };