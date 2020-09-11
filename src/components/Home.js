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
            <div className="title">GENERATE COLOR SCHEMES <span id="pink"> ON </span><span id="green">THE </span><span id="bluee">GO</span> </div>
            
               
                
                </Col>
                <Col>
                <Media>
                    <img
                        width={100}
                        height={100}
                        className="mr-3"
                        src={wheel}
                        alt="Generic placeholder"
                    />
                    <Media.Body id="">
                        <h4 id="pink2">Color schemes for your branding</h4>
                        <h5 id="whitee">
                       Using color theory, multiple color palletes, UI, HTML/CSS code are generated.
                        </h5>
                    </Media.Body>
                    </Media>
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