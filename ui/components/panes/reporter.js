import React  from 'react';
import './reporter.scss';

export default class Reporter extends React.Component {
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
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
          <div className="col-lg-4 col-md-12">
            <fieldset>
              <legend><b>Step One: Personal Information</b></legend>
              Name: <input TYPE="text" SIZE="20"/><br/>
              Email: <input TYPE="text" SIZE="20"/><br/>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}