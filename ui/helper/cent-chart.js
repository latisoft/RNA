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

    //var y = "Date, Time, Temperature\n2015-05-30,20,7.0\n2015-05-30,21,6.1\n2015-05-30,22,5.6\n2015-05-30,23,4.5";

    console.log(" intensity: ", this.props.data);
    Highcharts.chart('chart-container', {
      data: { csv: this.props.data },
      chart: {  
          type: 'heatmap',
          inverted: true
      },
      title: {  
          text: 'Highcharts heat map',
          align: 'left'
      },
      subtitle: {
          text: 'Temperature variation by day and hour through May 2015',
          align: 'left'
      },
      xAxis: {
          tickPixelInterval: 50,
          min: Date.UTC(2015, 4, 1),
          max: Date.UTC(2015, 4, 30)
      },
      yAxis: {
          title: {
              text: null
          },
          labels: {
              format: '{value}:00'
          },
          minPadding: 0,
          maxPadding: 0,
          startOnTick: false,
          endOnTick: false,
          tickPositions: [0, 6, 12, 18, 24],
          tickWidth: 1,
          min: 0,
          max: 23
      },
      colorAxis: {
          stops: [
              [0, '#3060cf'],
              [0.5, '#fffbbc'],
              [0.9, '#c4463a']
          ],
          min: -5
      },
      series: [{
          borderWidth: 0,
          colsize: 24 * 36e5, // one day
          tooltip: {
              headerFormat: 'Temperature<br/>',
              pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
          }
      }]
    });
  }
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