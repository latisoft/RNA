import React  from 'react';

import Home       from './vtabwindows/home';
import Settings   from './vtabwindows/settings';
import Monitor    from './vtabwindows/monitor';
import Reporter   from './vtabwindows/reporter';
import Analyzer   from './vtabwindows/analyzer';
import Visualizer from './vtabwindows/visualizer';
import Help       from './vtabwindows/help';

let vTabs = [
  { name: 'Home',       elem: (<Home />) }, // elem: require('./vtabwindows/home') },
  { name: 'Settings',   elem: (<Settings />) },
  { name: 'Monitor',    elem: (<Monitor />) },
  { name: 'Reporter',   elem: (<Reporter />) },
  { name: 'Analyzer',   elem: (<Analyzer />) },
  { name: 'Visualizer', elem: (<Visualizer />) },
  { name: 'Help',       elem: (<Help />) }
];

import './vtabwindow.scss';

export default class Vtabwindow extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    // let vtabs = <div>Hello</div>;
    let window = <Home/>;
    console.log("Home: ", Home);
    return (
        <div>
          {window}
        </div>
    );
  }
}