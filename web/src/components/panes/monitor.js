import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './monitor.scss';

export default class Monitor extends React.Component {
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