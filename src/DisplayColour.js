import React from 'react';
import logo from './logo.svg';
import './App.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';


// Displaying a Colour Component
// color: The Colour to be displayed
function DisplayColour(props) {
    const mystyle = {
      color: props.color,
      backgroundColor: props.color,
      padding: "10px",
      fontFamily: "Arial",
      hexValue: props.hex
    };
    const imageBlock = (
      <h1 style={mystyle}>.</h1>
    );
  
    return(
      <div>
    <p>The image for colour  "{props.color}" is: {imageBlock} </p>
    <p>  {HextoRGBvalues(props.color)}</p>
    </div>
    );
  }

  export default DisplayColour;