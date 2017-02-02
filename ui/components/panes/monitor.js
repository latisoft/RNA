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
    /*
        this.subtrays = [];
    for(let i=0; i<6; i++)
    {
      this.subtrays[i] = new Array(64);
      for(let j=0; j<64; j++)
        this.subtrays[i][j] = 0; // 64*i+j;
    }
    */
  }
  componentDidMount() {
    // socket.emit('toReader', { cmd:'done' }); // get done-table
    let the = this;
    Axios.get('/read/chips')
      .then(function(response) {
        //console.log(response.data);
        //console.log(response.status);


        let chips = response.data.split(':');
        // console.log("***store.subtrays: ", store.subtrays);
 
        for(let x=0; x<6; x++)
          for(let y=0; y<64; y++) {
            switch( chips[x*64+y] )
            {
              case '0': store.subtrays[x][y] = 'r'; break;
              case '1': store.subtrays[x][y] = 'a'; break;
              case '8': store.subtrays[x][y] = 'f'; break;
            }

          }

        console.log("***store.subtrays: ", store.subtrays);
        console.log("l= ", chips.length); 
        // console.log("n= ", store.subtrays);

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

  refresh(res) {
    // console.log("monitor...refresh", res);
    let status = res.status;
    switch(res.cmd)
    {
      case "info": 
        this.setState({
            status:       res.status
        });
        break;
        /*
      case "done": // 8,8,1,0,0...,0 x384 chips

        let chips = res.output.split(':');
        for(let x=0; x<6; x++)
          for(let y=0; y<64; y++) {
            store.subtrays[x][y] = chips[x*64+y];
          }

        console.log("***store.subtrays: ", store.subtrays);
        console.log("n= ", store.subtrays.length);
 
        this.setState({
            status:       status
        }); 
        break;
*/
      case "update": // #9902:5:65:5:6
        console.log("@@@@@@", res.output);
        let assayNo = this.state.assayNumber;
        let tmp     = res.output.split(':');
        let newNo   = tmp[1];
        let progress= tmp[2];
        let last    = tmp[3];
        let next    = tmp[4];
        let flag    = (assayNo != newNo)? true: false; // chip changed
        if(flag) {
          if(0<=assayNo && assayNo <384 )
            store.subtrays[Math.floor(assayNo/64)][assayNo%64] = 'f'; // finish
          if(0<=  newNo &&   newNo <384 )
            store.subtrays[Math.floor(  newNo/64)][  newNo%64] = 'a'; // assay
        } 
        this.setState({ 
            status:       status,
            assayNumber:  newNo,
            progress:     progress
        }); 
        break;
    }
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