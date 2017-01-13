import React  from 'react';
import Axios  from 'axios';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './settings.scss';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    };
    this.onCancel = this.onCancel.bind(this);
    this.onReset  = this.onReset.bind(this);
    this.onSave   = this.onSave.bind(this);
  }
  componentDidMount() {
    console.log("settings pane: did mount");

    Axios.get('/read/settings')
      .then(function(response){
        console.log(response.data);
        console.log(response.status);
      });
  }  
  onCancel() {
    console.log("onCancel");
  }
  onReset() {
    console.log("onReset");
  }
  onSave() {
    console.log("onSave");
    // var = 
    Axios.post('/write/settings', { data: 'Allen', status: 1 })
      .then(function(response){
        console.log('saved successfully:', response);
    });
  }

  refresh(res) {
    let disp = res.payload.split(':');
    switch(res.cmd)
    {
      case "-":
        this.setState({ 
            xx:           disp[0],
            yy:           disp[1]
        });
        break;
      case "=":
        this.setState({
            zz:           dispres.payload
        });
    }
  }
  render() {
    var opts = {};
    if(true) {
      opts['readOnly'] = 'readOnly';
    }

    return (
      <div>
        <div className='row'>
          <div className="col-md-4 col-sm-12">
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">System Information</legend>
                <div className="control-group">
                  <label className="control-label input-label" htmlFor="status">Status</label>
                  <div className="controls">
                      <input type="text" id="status" name="status" placeholder="Ready" {...opts} />
                  </div>
                  <label className="control-label input-label" htmlFor="cover">Cover</label>
                  <div className="controls">
                      <input type="text" id="cover" name="cover" placeholder="Close" {...opts} />
                  </div>
                  <hr/>
                  <h4>Thermal</h4>
                  <label className="control-label input-label" htmlFor="nowT">Current Temperature</label>
                  <div className="controls">
                      <input type="text" id="nowT" name="nowT" placeholder="38'C" {...opts} />
                  </div>
                  <label className="control-label input-label" htmlFor="minT">Min Temp.</label>
                  <div className="controls">
                      <input type="text" id="minT" name="minT" placeholder="25"/>
                  </div>
                  <label className="control-label input-label" htmlFor="maxT">Max Temp.</label>
                  <div className="controls">
                      <input type="text" id="maxT" name="maxT" placeholder="45"/>
                  </div>
                </div>
            </fieldset>
          </div>
          <div className="col-md-4 col-sm-12">
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">Motion</legend>
                <div className="control-group">
                    <label className="control-label input-label" htmlFor="startTime">Start :</label>
                    <div className="controls bootstrap-timepicker">
                        <input type="text" className="datetime" type="text" id="startTime" name="startTime" placeholder="Start Time" />
                        <i className="icon-time"></i>
                    </div>
                </div>
            </fieldset>
          </div>
          <div className="col-md-4 col-sm-12">
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">Vision</legend>
                <div className="control-group">
                    <label className="control-label input-label" htmlFor="startTime">Start :</label>
                    <div className="controls bootstrap-timepicker">
                        <input type="text" className="datetime" type="text" id="startTime" name="startTime" placeholder="Start Time" />
                        <i className="icon-time"></i>
                    </div>
                </div>
            </fieldset>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-offset-8 col-md-4 col-sm-12'>
            <button type="submit" className="btn btn-primary" onClick={this.onCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={this.onReset}>Reset</button>
            <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}