import React  from 'react';
import './analyzer.scss';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div> This is analyzer. </div>
    );
  }
}