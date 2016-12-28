import React  from 'react';
import './visualizer.scss';

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    return (
      <div> This is visualizer. </div>
    );
  }
}