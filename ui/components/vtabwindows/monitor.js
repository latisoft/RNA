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
      <div> This is monitor. </div>
    );
  }
}