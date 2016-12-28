import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './settings.scss';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className="col-md-4 col-sm-12">
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">System Information</legend>
                <div className="control-group">
                  <label className="control-label input-label" htmlFor="status">Status</label>
                  <div className="controls">
                      <input type="text" id="status" name="status" placeholder="Ready" readonly />
                  </div>
                  <label className="control-label input-label" htmlFor="cover">Cover</label>
                  <div className="controls">
                      <input type="text" id="cover" name="cover" placeholder="Close" readonly />
                  </div>
                  <hr/>
                  <h4>Thermal</h4>
                  <label className="control-label input-label" htmlFor="nowT">Current Temperature</label>
                  <div className="controls">
                      <input type="text" id="nowT" name="nowT" placeholder="38'C" readonly />
                  </div>
                  <label className="control-label input-label" htmlFor="minT">Min Temp.</label>
                  <div className="controls">
                      <input type="text" id="minT" name="minT" placeholder="25"/>
                  </div>
                  <label className="control-label input-label" htmlFor="minT">Max Temp.</label>
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
            <button type="submit" className="btn btn-primary">Cancel</button>
            <button type="submit" className="btn btn-primary">Reset</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}