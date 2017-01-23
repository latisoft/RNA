import React  from 'react';
import { ButtonToolbar, Button }  from 'react-bootstrap';
import { IntensityChart }         from '../../../helper/cent-chart';
import './image-intensity.scss';

export default class ImageIntensity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      status: 0,
      output: 'File: intensity.tsv'
    }
  }
  refresh(res) {
    console.log("image-intensity refresh: ", res);
  }
  render() {
    let output = this.state.output;
    return (
      <div>
        <h4>Image Intensity</h4>
        <div className='image-zoomer'>
          <div>Please select assay# (default is current)</div>
          <div>Please select microarray #</div>
          <IntensityChart data={this.props.data}/>
        </div>
      </div>
    );
  }
}