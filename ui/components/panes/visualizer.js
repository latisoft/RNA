import React  from 'react';
import './visualizer.scss';

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
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
    return (
      <div> This is visualizer. </div>
    );
  }
}