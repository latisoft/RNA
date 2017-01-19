import React  from 'react';
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
        <div>
          <h2>This is visualizer.</h2>
          <div id='chart'></div>
        </div>
      )
  }
}

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pieData:  [ {name: "Firefox", y: 6},
                  {name: "MSIE",    y: 4},
                  {name: "Safari",  y: 4},
                  {name: "Opera",   y: 1},
                  {name: "Chrome",  y: 7} ],
      functionFocus: ''
    }
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
      return <DonutChart data = {this.state.pieData}/>
  }
}