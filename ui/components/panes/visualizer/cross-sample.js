import React  from 'react';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import { ScatterPlotChart }       from './cent-chart';
import './cross-sample.scss';

export default class CrossSample extends React.Component {
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
    console.log("cross-sample refresh: ", res);
  }
  render() {
    let output = this.state.output;
    return (
      <div>
        <h4>Cross Sample Table</h4>
        <div className='row'>
          <div className='col-md-4 col-sm-4 col-xs-10'>
            <div>Sample/Probeset Files</div>
            <div>Select Data Type</div>
          </div>
          <div className='col-md-2 col-sm-2 col-xs-2'>
            "Button"
          </div>
          <div className='col-md-6 col-sm-6 col-xs-12'>
            {output}
          </div>
        </div>
      </div>
    );
  }
}