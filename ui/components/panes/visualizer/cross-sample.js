import React  from 'react';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import { DonutChart }             from '../../../helper/cent-chart';
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
    let buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onDraw}>Draw</Button>
      </ButtonToolbar>
    );
    let output = this.state.output;
    return (
      <div>
        <h4>Cross Sample Tabe</h4>
        <div className='row'>
          <div className='col-md-2 col-sm-2 hidden-xs'>
            <div>Sample 1</div>
            <div>Sample 2</div>
          </div>
          <div className='col-md-1 col-sm-1 hidden-xs'>
            {buttonsInstance}
          </div>
          <div className='col-md-9 col-sm-9 col-xs-12'>
            {output}
            <DonutChart data={this.props.data}/>
          </div>
        </div>
      </div>
    );
  }
}