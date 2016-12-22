import React  from 'react';

import Home       from './vtabwindows/home';
import Settings   from './vtabwindows/settings';
import Monitor    from './vtabwindows/monitor';
import Reporter   from './vtabwindows/reporter';
import Analyzer   from './vtabwindows/analyzer';
import Visualizer from './vtabwindows/visualizer';
import Help       from './vtabwindows/help';
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
      fIndex: 1
    }    
  }
  handleSelect(idx, e) {
    this.setState({fIndex: idx});
    console.log('click vtab index: ', idx);
    let id = e.target.id.toLowerCase();
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
        <div> {tabs} </div>
        <div> {pane} </div>
      </div>
    );
  }
}
export default App;