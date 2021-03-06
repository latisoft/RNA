import React  from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './help.scss';

export default class Help extends React.Component {
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
    const info = ["\n\nThis is help pane!! ^_^>\n\n",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."];
    return (
        <div>
          <Row>
            <Col id='help-banner' sm={12} md={12}><code>&lt;{'Col sm={12} md={12}'} /&gt;</code><br/>{info[0]}</Col>
            <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[1]}</Col>
            <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[2]}</Col>
            <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[3]}</Col>
          </Row>
        </div>
    );
  }
}