import React from 'react';
import ill1 from '../images/ill1.png';
import ill2 from '../images/ill2.png';
import ill3 from '../images/ill3.png';
import '../App.css';
import '../index.css';
import LoginForm from '../refLogin';
import banner from '../images/banner.png';
import { Button, InputGroup, FormControl, Container, Col, Row, Accordion, Form, Table, Media } from 'react-bootstrap';
import wheel from '../images/wheel.svg'
function Home() {

    return(
        <div id="homeP">
            <Container id="dark" fluid>
            <Row>
                <Col> 
            <div className="title">GENERATE COLOR SCHEMES <br/>
             <span id="pink"> ON </span><span id="green">THE </span><span id="bluee">GO</span> </div>
            
               
                
                </Col>
              
            
            </Row>
            <Row>
            <div className="title">
               
            </div>
            </Row>
            </Container>
           
            <Container fluid="md"  >
                <Row>
                    <Col >
                        <LoginForm /> 
                    </Col>
                    
                </Row>
                </Container>
                
        </div>
    );
}


export default Home;