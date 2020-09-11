import React from 'react';

import '../App.css';
import '../index.css';
import { Button, InputGroup, FormControl, Jumbotron, Container, Accordion, Form, Table, Row, Col, Alert} from 'react-bootstrap';
import icon1 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
function About() {

    return(
        <div>
           <Jumbotron fluid>
            <Container>
                <h1>About Wisual</h1>
                <p>
                Generating colour palettes using colour manupilations.
                </p>
            </Container>
            </Jumbotron>
    <Container>
    <Row>
    <Col> <span id="iconT"> 
    <img src={icon3} width="90px"/>
    <h5>Application of Color theory concepts</h5>
    </span>
    </Col>
    <Col>
    <span id="iconT"> 
    <img src={icon1} width="90px"/>
    <h5>Concept UI and code generation using your colors</h5>
    </span>
    </Col>
  
  </Row>
  <br/>
  <Row>
      <Alert variant="dark">
          For feedback: osman.warsi@live.com
      </Alert>
  </Row>
    </Container>
        </div>
    );
}


export default About;