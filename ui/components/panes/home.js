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
    const info = ["",
                  "We are also committed to improving genomics education and advocacy to help increase awareness and ensure the global society is positioned to benefit from these latest technology advancements.",
                  "We are building a new generation of genomics solutions that will reveal the complete genome and make more accurate and useful genomic information available to researchers, physicians, and consumers. While much progress has been made in genomics over the last two decades, the entire genome has still not been fully decoded and current technologies are limited in their DNA analysis.",
                  "Highest quality data forms the basis of superior science. The foundation of your research project relies on optimal genomic analysis results. Our technological and Genomic Expertise enable us to deliver QUALITY RESULTS to support the success of your scientific project."];
    return (
        <div id='home-frame'>
          <Row id='home-news'>
                  <h2>Welcome</h2><p>{info[0]}</p>
          </Row>
          <Row id='home-posts'>
            <Col md={4} sm={4} xs={12}>
                  <h4>Last use information</h4>{info[1]}</Col>
            <Col md={4} sm={4} xs={12}>
                  <h4>System information</h4> {info[2]}</Col>
            <Col md={4} sm={4} xs={12}>
                  <h4>Warning and log</h4> {info[3]}</Col>
          </Row>
        </div>

    );
  }
}