import React  from 'react';
import './cent-chart.scss';

var Highcharts = require('highcharts');
require('highcharts/modules/map')(Highcharts);
require('highcharts/modules/data')(Highcharts);
// import Highcharts from "commonjs-highcharts"

class IntensityChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = "";
  }
  componentDidMount() {

    console.log(" intensity: ", this.props.data);
      
    //"10,19,8,24,67\n92,58,78,117,48\n35,15,123,64,52\n72,132,114,19,16\n38,5,8,117,115\n88,32,12,6,120\n13,44,88,98,96\n31,1,82,32,30\n85,97,123,64,84\n47,114,31,48,91";
    let source = this.props.data;
    
    let tmpData = [];
    let arr0 = source.split('\n');
    for( let i=0, iLen=arr0.length; i<iLen; i++) {
      let arr1 = arr0[i].split(',');
      for( let j=0, jLen=arr1.length; j<jLen; j++)
        tmpData.push( [i, j, parseInt(arr1[j])] );
    }

    console.log("tmpData: ", tmpData);

      Highcharts.chart('chart-container', {
      chart: {
          type: 'heatmap',
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
      },
      title: {
          text: 'Sales per employee per weekday'
      },
      colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[3]
      },
      series: [{
          name: 'Sales per employee',
          borderWidth: 1,
          data: tmpData
      }]
    });
  }
  //       data: { csv: this.props.data }
  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(props.data);
  }
  render() { return (<div id='chart-container'></div>) }
}

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
  render() { return (<div id='chart'></div>) }
}

class DonutChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = "";
  }
  componentDidMount() {
    this.chart = Highcharts.chart('chart', {
      chart: {
          type: 'pie'
      },
      title: 'Browser Market sahre',
      yAxis: {
          title: { text: 'Total percent market share' }
      },
      plotOptions: {
          pie: { shadow: false }
      },
      tooltip: {
          formatter: function() {
              return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
          }
      },
      series: [{
          name: 'Browsers',
          data: this.props.data,
          size: '100%',
          innerSize: '85%',
          showInLegend:true,
          dataLabels: {
              enabled: true
          }
      }]
    });
  }
  componentWillReceiveProps(props) {
    this.chart.highcharts().series[0].setData(props.data);
  }
  render() { return (<div id='chart'></div>) }
}

export { IntensityChart, ScatterPlotChart, DonutChart };