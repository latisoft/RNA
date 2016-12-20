import React  from 'react';
import './help.scss';

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div> This is help. </div>
    );
  }
}