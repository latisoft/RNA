import React  from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';
import './configuration.scss';
import io from 'socket.io-client';
let socket = io();

export default class Configuration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      status: 0,
      output: 'Please prepare and setup your pipeline.'
    }
    this.onRun = this.onRun.bind(this);
  }
  onRun() {
    console.log("onRun");

    socket.emit('toEngine', {}); //test_para);
  }
  refresh(res) {
    switch(res.cmd)
    {
      case "imgprocess":
        this.setState({ 
            status:       res.status,
            output:       res.output
        });
        break;
      case "pipeline":
        this.setState({
            status:       res.status,
            output:       res.output
        });
    }
  }
  render() {

    const buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onRun}>Run</Button>
      </ButtonToolbar>
    );
    const output = this.state.output;
    return (
      <div>
        <h4>Configuration page</h4>
        <div className='row'>
          <div className='col-md-offset-6 col-md-6 col-sm-offset-2 col-sm-8'>
            Please setup global variable (CAD,CEN,PS) for pipeline.
          </div>
        </div>
      </div>
    );
  }
}