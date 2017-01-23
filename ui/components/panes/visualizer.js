import React          from 'react';
import store          from  '../store';
import SampleBase     from './visualizer/sample-base';
import ProbesetBase   from './visualizer/probeset-base';
import CrossSample    from './visualizer/cross-sample';
import './visualizer.scss';

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0,
      status: "init"
    };
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
    let panes = [ <SampleBase   ref="SampleBase"    data={store.plotData0}/>,
                  <ProbesetBase ref="ProbesetBase"  data={store.plotData1}/>,
                  <CrossSample  ref="CrossSample"   data={store.pieData}/> ];
    let pane = panes[index];
    return (
        <div id='vis-frame'>
          <div id='vis-navigator'>{tabs}</div>
          <div id='vis-container'>{pane}</div>
        </div>
    );
  }
}