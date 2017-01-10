import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './monitor.scss';
import io from 'socket.io-client';
let socket = io();

export default class Monitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      isResetting: false,
      isAssay: false
    }
    this.onRset = this.onReset.bind(this);
    this.onAssay= this.onAssay.bind(this);
  }
  onReset() {
    console.log("onReset");
    socket.emit('toReader', { cmd:'reset', flow:'standard'  });
  }  
  onAssay() {
    console.log("onAssay");
    this.setState(prevState => ({
      isAssay: !prevState.isAssay
    }));
    let cmd = (this.state.isAssay)? 'assay-stop': 'assay-start';
    socket.emit('toReader', { cmd:cmd, no:0, auto:'all' });
  }

  render() {

    // let cmd1 = this.onAssay.bind(this);
    //let cmd2 = this.onReset.bind(this);
    let show = (this.state.isAssay)? "STOP" : "START";

    const buttonsInstance = (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="success" onClick={this.onReset}>Reset</Button>
        <Button bsStyle="primary" onClick={this.onAssay}>{show}</Button>
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