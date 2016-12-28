import React  from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: ''
    }
  }
  render() {
    const info = ["\n\nThis is home pane!! ^o^>\n\n",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."];
    return (

        <div id='home-frame'>
          <Row>
            <Col id='home-banner' sm={12} md={12}><code>&lt;{'Col sm={12} md={12}'} /&gt;</code><br/>{info[0]}</Col>
          </Row>
          <Row>
            <Col className='x' sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[1]}</Col>
            <Col className='x' sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[2]}</Col>
            <Col className='x' sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{info[3]}</Col>
          </Row>
        </div>

    );
  }
}