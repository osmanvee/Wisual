import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';


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
      width: "70px",
      height: "70px",
      hexValue: props.hex,
      marginLeft: "20px"
    };

    const otherstyle = {
      color: "white",
      fontFamily: "Century Gothic, Verdana, sans-serif",
      fontSize: "16px"
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