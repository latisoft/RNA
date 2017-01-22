import React  from 'react';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import { ScatterPlotChart }       from './cent-chart';
import './sample-base.scss';

export default class SampleBase extends React.Component {
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
    console.log("sample-base refresh: ", res);
  }
  render() {
    let buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onDraw}>Draw</Button>
      </ButtonToolbar>
    );
    let output = this.state.output;
    let xData  = this.props.data;
    return (
      <div>
        <h4>Sample Base Scatter Plot</h4>
        <div className='row'>
          <div className='col-md-3 col-sm-3 col-xs-8'>
            <div>Sample Files</div>
            <div>Select Data Type</div>
          </div>
          <div className='col-md-2 col-sm-2 col-xs-2'>
            {buttonsInstance}
          </div>
          <div className='col-md-6 col-sm-6 col-xs-10'>
            {output}
            <ScatterPlotChart data={xData}/>
          </div>
        </div>
      </div>
    );
  }
}