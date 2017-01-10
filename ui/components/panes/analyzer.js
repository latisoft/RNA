import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './analyzer.scss';
import io from 'socket.io-client';
let socket = io();

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
    this.onRun = this.onRun.bind(this);
  }
  onRun() {
    console.log("onRun");
    socket.emit('toEngine', { 
      func:'pipeline', 
      desc:{
      algorithms: [{
          name: 'A'
        },{
          name: 'B'
        },{
          name: 'C'
        },{
          name: 'D'
        }]
    }});
  }  
  render() {


    const buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onRun}>Run</Button>
      </ButtonToolbar>
    );

    return (
      <div>
        <h4>Analyzer</h4>
        <div className='row'>
          <div className='col-md-offset-8 col-md-4 col-sm-12'>
            {buttonsInstance}
          </div>
        </div>
      </div>
    );
  }
}