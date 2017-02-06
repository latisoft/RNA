import React  from  'react';
import store  from  '../store';
import ImageIntensity     from './reporter/image-intensity';
import './reporter.scss';

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  refresh(res) {
    console.log("reporter refresh: ", res);
    // res.cmd == intensity
    // get data from store
    this.setState({
        status:       res.status,
        output:       res.output
    });
  }
  render() {
    let pane = <ImageIntensity ref="ImageIntensity"  data={store.probeData}/>;
    return (
        <div id='rep-frame'>
          <div id='vis-navigator'>Probe intensity of Microarray</div>
          <div id='rep-container'>{pane}</div>
        </div>
    );
  }
}