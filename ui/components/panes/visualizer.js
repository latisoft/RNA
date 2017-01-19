
import React      from 'react';
import './visualizer.scss';

// Load Highcharts
var Highcharts = require('highcharts');
// Load a module
// var addFunnel  = require('highcharts/modules/funnel')(Highcharts);


export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  componentDidMount() {
    // Extend Highcharts with modules
    // addFunnel(Highcharts);
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
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
               [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
               [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2],
               [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8]]
      }, {
        name: 'BB',
        color: 'rgba(119, 152, 191, .5)',
        data: [[177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5],
               [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1],
               [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
               [171.4, 70.0], [185.4, 81.8], [185.4, 84.1]]
      }]
    });
  }
  refresh(res) {
    let disp = res.payload.split(':');
    switch(res.cmd)
    {
      case "-":
        this.setState({ 
            xx:           disp[0],
            yy:           disp[1]
        });
        break;
      case "=":
        this.setState({
            zz:           dispres.payload
        });
    }
  }  
  render() {
    return (
      <div>
        <h2>This is visualizer.</h2>
        <div id='chart'></div>
      </div>
    );
  }
}