import React  from 'react';

import Home       from './panes/home';
import Settings   from './panes/settings';
import Monitor    from './panes/monitor';
import Reporter   from './panes/reporter';
import Analyzer   from './panes/analyzer';
import Visualizer from './panes/visualizer';
import Help       from './panes/help';
import './app.scss';

import io from 'socket.io-client';
let socket = io();
let vTabs = [
  'Home', 
  'Settings', 
  'Monitor', 
  'Reporter', 
  'Analyzer', 
  'Visualizer', 
  'Help'
];
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0
    }
    this.onReaderResponse = (res) => {
      //console.log('reader-res: ', res);
      let fIndex  = this.state.fIndex;
/*
      switch(res.cmd) 
      {
        case "info":  // get status
        break;
        case "init":  // get done-table
        break;
        case "update":
        break;
      }
*/
      // Reader Response Processing
      if(vTabs[fIndex]=="Monitor") {
          let name    = vTabs[fIndex];
          this.refs[name].refresh(res);
      }
    }
    this.onEngineResponse = (res) => {
      console.log('engine-res: ', res);
      let fIndex  = this.state.fIndex;
      let name    = vTabs[fIndex];

      // Engine Response Processing
      if( (vTabs[fIndex]=="Analyzer"  ) && (res.cmd=="pipeline") )
        this.refs[name].refresh(res);

      if( (vTabs[fIndex]=="Visualizer") && (res.cmd=="plot") )
        this.refs[name].refresh(res);
    }
    console.log("GUI start");
  }
  componentDidMount() {
    socket.on('server event', function(evt) {
      console.log('svr-evt: ', evt);
    });    
    socket.on('reader response', this.onReaderResponse);
    socket.on('engine response', this.onEngineResponse);
    window.onkeydown = this.handleKeyDown.bind(this);
  }
  handleSelect(idx, e) {
    this.setState({fIndex: idx});
    console.log('click vtab index: ', idx);
    let id = e.target.id.toLowerCase();
  }
  handleKeyDown(e) {
    let idx = this.state.fIndex;
    switch(e.keyCode) // l:37, u:38; r:39, d:40
    {
      case 38: // up
        if(idx>0) idx--; break;
      case 40: // down
        if(idx<6) idx++; break;
      default:
        if(typeof this.refs[ vTabs[idx] ].handleKeyDown === 'function')
          this.refs[ vTabs[idx] ].handleKeyDown(e);
        return;
    }
    this.setState({fIndex: idx});
  }
  render() {

    let index = this.state.fIndex;
    let the   = this;

    let tabs  = vTabs.map(function(vTab, idx) {
                  let src = ('.\\img\\vtab-' + vTab + '.png').toLowerCase();
                  
                  return (
                    <div  onClick   = {the.handleSelect.bind(the, idx)}
                          className = {idx==index? 'vtab-btn-focus':'vtab-btn'}
                          key       = {idx}
                          id        = {vTab}>
                      <img src = {src} />
                      <span>{vTab}</span>
                    </div>);
                });
    var panes = [ <Home       ref="Home"      />,
                  <Settings   ref="Settings"  />,
                  <Monitor    ref="Monitor"   />,
                  <Reporter   ref="Reporter"  />,
                  <Analyzer   ref="Analyzer"  />,
                  <Visualizer ref="Visualizer"/>,
                  <Help       ref="Help"      /> ];
    let pane = panes[index];
    
    return (
        <div id="frame">
          <div id='banner'>Centrillion Microarray Reader</div>
          <div>{tabs}</div>
          <div className='container'>{pane}</div>
        </div>
    );
  }
}
export default App;