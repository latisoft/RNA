import React  from 'react';
import store  from  '../store';

import './reporter.scss';

var Highcharts = require('highcharts');
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
  render() {
      return (
          <div id='chart'></div>
      )
  }
}

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  refresh(res) {
    console.log("reporter refresh: ", res);
    // res.cmd == intensity
    // get data from store
    this.setState({
        status:       res.status,
        output:       res.output
    });
  }
  render() {
    return (
      <div>
        <h2>This is reporter.</h2>
        <DonutChart data = {store.pieData}/>
      </div>
    );
  }
}