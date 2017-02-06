import React  from  'react';
import Axios  from 'axios';
import store  from  '../store';
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
      cmdSN:          0,
      subtray:        []
    };
    this.onReset = this.onReset.bind(this);
    this.onAssay = this.onAssay.bind(this);
  }
  componentDidMount() {
    let the = this;
    Axios.get('/read/chips')
      .then(function(response) {
        let chips = response.data.split(':');

        for(let x=0; x<6; x++)
          for(let y=0; y<64; y++) {
            store.subtrays[x][y] = chips[x*64+y];
        }
        the.setState({
            status:       "init"
        }); 
      });
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

  refresh(status, newNo, progress) {
    console.log("monitor: refresh:", progress);
    this.setState({ 
        status:       status,
        assayNumber:  newNo,
        progress:     progress
    });
  }

  render() {
    let show  = (this.state.isAssay)? "STOP" : "START";
    let id    = this.state.plateRFID;
    let no    = this.state.assayNumber;
    let w     = this.state.progress;
    let x     = this.state.stepX;
    let y     = this.state.stepY;
    let z     = this.state.stepZ;
    let status= this.state.status;

    let plateInfo         = (
      <div className='col-md-4 col-sm-12'>
        <h3>Plate Information</h3>
          <h4>Plate RFID <span className="label label-default">{id}</span></h4>
          <h4>Current Microarray <span className="label label-default">{no}</span></h4>
          <h4>Next Microarray <span className="label label-default">Next</span></h4>
      </div>);

    let buttonsBar = (
      <div className='col-md-4 col-sm-12'>
        <h3>Control</h3>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="success" onClick={this.onReset}>Reset</Button>
            <Button bsStyle="primary" onClick={this.onAssay}>{show}</Button>
          </ButtonToolbar>
        <h4>Status <span className="label label-default">{status}</span></h4>
      </div>);

    let wStyle = {width:w+"%"};
    let assayStatus       = (
      <div className='col-md-4 col-sm-12'>
        <h3>Assay Status</h3>
          <h4>Position <span className="label label-default">{x}:{y}:{z}</span></h4>
          <h4>Progress <span className="label label-default">{w}%</span></h4>
          <div className="progress">
            <div className="progress-bar progress-bar-striped active" role="progressbar"
              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={wStyle}>
              {w}%
            </div>
          </div>
      </div>);
    let microarrayDisplay = store.subtrays.map( (tray, idx)=>{
      let chips = tray.map( (chipValue, k)=>{
        let cStyle = 'chip-ready';
        switch(chipValue)
        {
          case 'a': cStyle = 'chip-assay';  break;
          case 'f': cStyle = 'chip-finish'; break;
          default: break;
        }
        return (<div key={k} className={cStyle}>{k}</div>);
      });
      return (
        <div key={idx}>
          <div className  = "hidden-lg hidden-md col-sm-2 col-xs-2">
            <h4>Tray {idx}</h4>
            <div className= "subtray-brief"></div>
          </div>
          <div className  = "col-lg-2 col-md-2 hidden-sm hidden-xs">
            <div className= "subtray-lux">{chips}</div>
          </div>
        </div>);
    });
    return (
             <div className='row'>
               {buttonsBar} {plateInfo} {assayStatus}
               {microarrayDisplay}
             </div>
           );
  }
}