import React from 'react';
import logo from './logo.svg';
import './App.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';


// Displaying a Colour Component
// color: The Colour to be displayed
function DisplayColour(props) {
    const mystyle = {
      color: props.color,
      backgroundColor: props.color,
      padding: "10px",
      border: "2px solid black",
      borderRadius: "10px",
      fontFamily: "Arial",
      hexValue: props.hex
    };

    const otherstyle = {
      color: "white",
      fontFamily: "verdana",
      fontSize: "20px"
    };


    const imageBlock = (
      <div style={mystyle} >
        <h1 style={otherstyle}> {props.color}  </h1>
      </div>
    
    );
  
    return(
      <div>
    {imageBlock} 
    
    </div>
    );
  }

  export default DisplayColour;