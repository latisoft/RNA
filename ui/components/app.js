import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import Vtabs  from './vtabs';
import Vtabwindow from './vtabwindow';

import './app.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ""
    }
  }
  render() {

    return (
      <div>
        <div id="frame">
          <Vtabs      ref="vtabs"/>
          <Vtabwindow ref="vtabwindow"/>
        </div>
      </div>
    );
  }
}
export default App;