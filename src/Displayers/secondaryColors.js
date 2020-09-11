import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col, Card } from 'react-bootstrap';
import generateRGBbar from './rgbBars';
import GenerateColors from './ColorGenerator';

function DisplaySecondaryColors(props) {

    const mystyle = {
        color: props.color,
        backgroundColor: props.color,
        width: "30px",
        height: "30px",
        border: "1px solid #2b2b29",
        borderRadius: "10px",
        fontFamily: "Arial",
     
        hexValue: props.hex,
        
      };

      const otherstyle = {
        color: props.color,
        
      };


      const imageBlock = (
        <div style={mystyle} >
          <p style={otherstyle}> c</p>
        </div>
      
      );

      return imageBlock;

}

export default DisplaySecondaryColors;