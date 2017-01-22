import React          from 'react';
import Configuration  from './analyzer/configuration';
import Standard       from './analyzer/standard';
import Advanced       from './analyzer/advanced';
import './analyzer.scss';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0
    }
  }
  refresh(res) {
    console.log("analyzer refresh: ", res);
    // res.cmd == pipeline
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
    let tabs  = ['Configuration', 'Standard', 'Advanced'].map(
                  function(hTab, idx) {
                    return (
                      <div  onClick   = {the.handleSelect.bind(the, idx)}
                            className = {idx==index? 'htab-btn-focus':'htab-btn'}
                            key       = {idx}
                            id        = {hTab}>
                        {hTab}
                      </div>);
                  }
                );
    let panes = [ <Configuration  ref="Configuration" />,
                  <Standard       ref="Standard"      />,
                  <Advanced       ref="Advanced"      /> ];
    let pane = panes[index];
    return (
        <div id='ana-frame'>
          <div id='ana-navigator'>{tabs}</div>
          <div id='ana-container'>{pane}</div>
        </div>
    );
  }
}