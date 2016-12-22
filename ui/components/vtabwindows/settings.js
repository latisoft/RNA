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
      <div> This is settings. </div>
    );
  }
}