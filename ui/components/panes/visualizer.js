import React          from 'react';
import SampleBase     from './visualizer/sample-base';
import ProbesetBase   from './visualizer/probeset-base';
import CrossSample    from './visualizer/cross-sample';
import './visualizer.scss';

/*
var Highcharts = require('highcharts');
class ScatterPlotChart extends React.Component {
  constructor(props) {
      super(props);
      this.chart = "";
    }
  componentDidMount() {
    Highcharts.chart('chart', { 
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
*/
export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0,
      plotData:  {
        AA: [ [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
              [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
              [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2],
              [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8] ],
        AB: [ [150, 98],[149, 106], [144, 79], [151, 112] ],
        BB: [ [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5],
              [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1],
              [189.0, 85.9], [175.2, 81.8], [174.0, 82.5], [176.8, 80.5],
              [171.4, 70.0], [185.4, 81.8], [185.4, 84.1] ]
      },
      status: "init"
    }   
  }
  refresh(res) {
    console.log("visualizer refresh: ", res);
    // res.cmd == 'plot'
    // get data from store
    this.setState({
        status:       res.status,
        output:       res.output
    });
  }
  handleSelect(idx, e) {
    this.setState({fIndex: idx});
    console.log('click htab index: ', idx);
    let id = e.target.id.toLowerCase();
  }
  handleKeyDown(e) {
    let idx = this.state.fIndex;
    switch(e.keyCode) // l:37, u:38; r:39, d:40
    {
      case 37: // left
        if(idx>0) idx--;
        break;
      case 39: // right
        if(idx<3) idx++;
        break;
      default: return;
    }
    this.setState({fIndex: idx});
  }
  render() {
    let index = this.state.fIndex;
    let the   = this;
    let tabs  = ['Sample base', 'Probeset base', 'Cross sample'].map(
                  function(hTab, idx) {
                    return (
                      <div  onClick   = {the.handleSelect.bind(the, idx)}
                            className = {idx==index? 'htab-btn-focus':'htab-btn'}
                            key       = {idx}>
                        {hTab}
                      </div>);
                  }
                );
    let panes = [ <SampleBase   ref="SampleBase"    data={this.state.plotData}/>,
                  <ProbesetBase ref="ProbesetBase"  data={this.state.plotData}/>,
                  <CrossSample  ref="CrossSample"   data={this.state.plotData}/> ];
    let pane = panes[index];
    return (
        <div id='vis-frame'>
          <div id='vis-navigator'>{tabs}</div>
          <div id='vis-container'>{pane}</div>
        </div>
    );
  }
}