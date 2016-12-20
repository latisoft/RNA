import React  from 'react';
import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div> This is home. </div>
    );
  }
}