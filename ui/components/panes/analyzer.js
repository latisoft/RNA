import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './analyzer.scss';
import io from 'socket.io-client';
let socket = io();

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      status: 0,
      output: 'Are you ready?'
    }
    this.onRun = this.onRun.bind(this);
  }
  onRun() {
    console.log("onRun");
    socket.emit('toEngine', { 
      func:'pipeline', 
      para:{
        desc: 'bioinfomatics',
        para: [{
          name: 'A', type: 'pre-processing'
        },{
          name: 'B', type: 'normalization'
        },{
          name: 'C', type: 'summarization'
        },{
          name: 'D', type: 'geno-typing'
        }]
      },
      global: {
        prefix: "demo_",
        fCAD: { detail: 'Select microarray', path: './axiom_snp.cad' },
        fCEN: { detail: 'CENtrillion sample file', list: ["xxxx-sn000000-m001","xxxx-sn000000-m086"]},
        fPBS: { detail: 'ProBe Set', list: ["canser" , "uuu-disease", "oxoxo"] }
      }
    });
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
        <h4>Analyzer</h4>
        <div className='row'>
          <div className='col-md-offset-6 col-md-6 col-sm-offset-2 col-sm-8'>
            {buttonsInstance}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            {output}
          </div>
        </div>
      </div>
    );
  }
}