import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';

import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from '../Modifiers/modifier';
import { isDark } from '../Modifiers/colorTester';
import GenerateUI from './UIGenerator';

import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col, Card } from 'react-bootstrap';





function GenerateColors(props) {

    const eh1 = {
       color: props.color
    };
    const eh2 = {
        color: generateComplementaryColor(props.color)
     };
     const eh3 = {
        color: hexSubtractModifier(props.color, 40, 40, 40)
     };

    let div = '';
    let div2 = '';
    let div3= '';
    
        //MAIN HANDLING
        div = <DisplayColour color={ props.color} /> ;
        div2 = <DisplayColour color={ generateComplementaryColor(props.color)} />;
        if (isDark(props.color, 60)) {
            div3 = <DisplayColour color={ hexAddModifier(props.color, 40, 40, 40)} />;
        } else {
            div3 = <DisplayColour color={ hexSubtractModifier(props.color, 40, 40, 40)} />;
        }
    
  
    return (
        <Card body > 
        <div> 
            <Container>
                <Row>
                            <Col xs={12} md={8}>
                            <Container id="tester3" fluid>
                                <Row>
                                    <Col id="tester">{div}</Col> 
                                                    
                                </Row>
                                <Row>
                                <Col id="tester">{div2}</Col>  
                                </Row>
                                <Row >
                                <Col id="tester">{div3}</Col>
                                </Row>
                            </Container>
                            </Col>
                            <Col xs={6} md={4}>

                            <Container>
                                    <Row>
                                    <GenerateUI color1={props.color} color2={generateComplementaryColor(props.color)} color3={ hexAddModifier(props.color, 40, 40, 40)} />
                                    </Row>
                                </Container>
                            </Col>
                </Row>
                <h1 style={eh1}>heading 1</h1>
                <h2 style={eh2}>heading 2</h2>
                <h3 style={eh2}>heading 2</h3>
            </Container>
            


            
           
        </div>
            
            </Card>
        
       
    );
}

export default GenerateColors;