import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col } from 'react-bootstrap';
import generateRGBbar from './rgbBars';
import GenerateColors from './ColorGenerator';


// Displaying a Colour Component
// color: The Colour to be displayed
function DisplayColour(props) {
    const mystyle = {
      color: props.color,
      backgroundColor: props.color,
      padding: "10px",
      border: "2px solid #2b2b29",
      borderRadius: "10px",
      fontFamily: "Arial",
      width: "auto",
      hexValue: props.hex,
      marginLeft: "20px"
    };

    const otherstyle = {
      color: props.color,
      fontFamily: "Century Gothic, Verdana, sans-serif",
      fontSize: "15px"
    };


    const imageBlock = (
      <div style={mystyle} >
        <h1 style={otherstyle}> colour </h1>
      </div>
    
    );

    const bar = ( 
    <generateRGBbar color={props.color} /> 
    );
  
    return(
      <div>
        <Container>
          <Row>
            <Col md="auto" >{imageBlock} </Col>
            <Col xs={5} >
              <div id="tester">  <ProgressBar  label="R %" variant="danger" now={convertHexToRed(props.color)}  /> </div>
              <div id="tester">  <ProgressBar  label="G %" variant="success" now={convertHexToGreen(props.color)} /> </div>
              <div id="tester"> <ProgressBar label="B %" variant="info" now={convertHexToBlue(props.color)} /> </div>
               </Col>
            <Col id="tt">
            HEX: {props.color}  {HextoRGBvalues(props.color)}
            </Col>
          </Row>
        </Container>
       {bar}
       
       
      </div>
    );
  }

  export default DisplayColour;