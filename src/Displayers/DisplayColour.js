import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Button, InputGroup, FormControl, Container, ProgressBar } from 'react-bootstrap';


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
      color: "white",
      fontFamily: "Century Gothic, Verdana, sans-serif",
      fontSize: "15px"
    };


    const imageBlock = (
      <div style={mystyle} >
        <h1 style={otherstyle}> {props.color}  </h1>
      </div>
    
    );
  
    return(
      <div>
       {imageBlock} 
       <div>
                    <ProgressBar label="R %" variant="danger" now={convertHexToRed(props.color)} />
                    <ProgressBar  label="G %" variant="success" now={convertHexToGreen(props.color)} />
                    <ProgressBar label="B %" variant="info" now={convertHexToBlue(props.color)} />
                  
                    </div>
      </div>
    );
  }

  export default DisplayColour;