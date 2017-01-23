import React  from 'react';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import { ScatterPlotChart }       from '../../../helper/cent-chart';
import './probeset-base.scss';

export default class ProbesetBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      status: 0,
      output: 'File: genotype.tsv'
    }
    this.onDraw = this.onDraw.bind(this);
  }
  onDraw() {
    console.log("onDraw");
  }
  refresh(res) {
    console.log("probeset-base refresh: ", res);
  }
  render() {
    let buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onDraw}>Draw</Button>
      </ButtonToolbar>
    );
    let output = this.state.output;
    return (
      <div>
        <h4>Probeset Base Scatter Plot</h4>
        <div className='row'>
          <div className='col-md-2 col-sm-2 hidden-xs'>
            <div>Probeset Files</div>
            <div>Select Data Type</div>
          </div>
          <div className='col-md-1 col-sm-1 hidden-xs'>
            {buttonsInstance}
          </div>
          <div className='col-md-9 col-sm-9 col-xs-12'>
            {output}
            <ScatterPlotChart data={this.props.data}/>
          </div>
        </div>
      </div>
    );
  }
}