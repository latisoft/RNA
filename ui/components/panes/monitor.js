import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './monitor.scss';
import io from 'socket.io-client';
let socket = io();

export default class Monitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus:  '',
      isResetting:    false,
      isAssay:        false,
      assayNumber:    1,
      progress:       0,
      status:         0,
      plateRFID:      'Waiting ...',
      stepX:          0,
      stepY:          0,
      stepZ:          0,
      done:           '----:----:----:----:----:----',
      subtray:        []
    };
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
  refresh(res) {
    let disp = res.payload.split(':');
    switch(res.cmd)
    {
      case "update":
        this.setState({ 
            assayNumber:  disp[1],
            progress:     disp[2]
        });
        break;
      case "done":
        this.setState({
            done:         dispres.payload
        });
    }
  }
  render() {

    let show  = (this.state.isAssay)? "STOP" : "START";
    let id    = this.state.plateRFID;
    let no    = this.state.assayNumber;
    let pgs   = this.state.progress;
    let x     = this.state.stepX;
    let y     = this.state.stepY;
    let z     = this.state.stepZ;
    let done  = this.state.done;

    let buttonsBar = (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="success" onClick={this.onReset}>Reset</Button>
        <Button bsStyle="primary" onClick={this.onAssay}>{show}</Button>
      </ButtonToolbar>);
    let plateInfo         = (
      <div className='col-md-6 col-sm-12'>      
        <h2>Plate Information</h2>
          <h4>Plate RFID <span className="label label-default">{id}</span></h4>
          <h4>Current Microarray <span className="label label-default">{no}</span></h4>
          <h4>Next Microarray <span className="label label-default">Next</span></h4>
      </div>);
    let assayStatus       = (
      <div className='col-md-6 col-sm-12'>
        <h2>Assay Status</h2>
          <h4>Position <span className="label label-default">{x}:{y}:{z}</span></h4>
          <h4>Progress <span className="label label-default">{pgs}</span></h4>
          <h4>Done <span className="label label-default">{done}</span></h4>
      </div>);
    let microarrayDisplay = [1,2,3,4,5,6].map( (n,idx)=>{
                              return  (
                                <div  key       = {idx} 
                                      className = "col-md-2 col-sm-6 hidden-xs">
                                  <div className= "subtray">Disk {n}</div>
                                </div>);
                            });
    return (
      <div>
        <h4>Monitor</h4>
        <div className='row'>
          <div className='col-md-offset-6 col-md-6 col-sm-offset-2 col-sm-8'>
            {buttonsBar}
          </div>
        </div>
        <div className='row'>
            {plateInfo}
            {assayStatus}
        </div>
        <div className='row'>
          {microarrayDisplay}
        </div>
      </div>
    );
  }
}