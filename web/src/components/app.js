import React  from 'react';

import Home       from './panes/home';
import Settings   from './panes/settings';
import Monitor    from './panes/monitor';
import Reporter   from './panes/reporter';
import Analyzer   from './panes/analyzer';
import Visualizer from './panes/visualizer';
import Help       from './panes/help';
import './app.scss';

let vTabs = [
  { name: 'Home',       elem: (<Home />) },
  { name: 'Settings',   elem: (<Settings />) },
  { name: 'Monitor',    elem: (<Monitor />) },
  { name: 'Reporter',   elem: (<Reporter />) },
  { name: 'Analyzer',   elem: (<Analyzer />) },
  { name: 'Visualizer', elem: (<Visualizer />) },
  { name: 'Help',       elem: (<Help />) }
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fIndex: 0
    }    
  }
  componentDidMount() {
    console.log("Key handle mounted!");
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
        if(idx>0) idx--;
        break;
      case 40: // down
        if(idx<6) idx++;
        break;
      default: return;
    }
    this.setState({fIndex: idx});
  }  
  render() {

    let index = this.state.fIndex;
    let the   = this;

    let tabs  = vTabs.map(function(vTab, idx) {
                  let src = ('.\\img\\vtab-' + vTab.name + '.png').toLowerCase();
                  return (
                    <div  onClick   = {the.handleSelect.bind(the, idx)}
                          className = {idx==index? 'vtab-btn-focus':'vtab-btn'}
                          key       = {idx}
                          id        = {vTab.name}>
                      <img src = {src} />
                      <span>{vTab.name}</span>
                    </div>);
                });
    let pane = vTabs[index].elem;
    return (
        <div id="frame">
          <div id='banner'>Centrillion Microarray Reader</div>
          <div> {tabs} </div>
          <div className='container'> {pane} </div>
        </div>
    );
  }
}
export default App;