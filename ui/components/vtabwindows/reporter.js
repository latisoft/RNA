import React  from 'react';
import './reporter.scss';

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div> This is reporter. </div>
    );
  }
}