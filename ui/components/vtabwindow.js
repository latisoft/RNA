import React  from 'react';

import Home       from './vtabwindows/home';
import Settings   from './vtabwindows/settings';
import Monitor    from './vtabwindows/monitor';
import Reporter   from './vtabwindows/reporter';
import Analyzer   from './vtabwindows/analyzer';
import Visualizer from './vtabwindows/visualizer';
import Help       from './vtabwindows/help';

import './vtabwindow.scss';

export default class Vtabwindow extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    let vtabs = <div>Hello</div>;
    return (
        <div>
          {vtabs}
        </div>
    );
  }
}