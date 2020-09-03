import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from './modifier';
import { isDark } from './colorTester';


function GenerateColors(props) {

    let div = '';
    let div2 = '';
    let div3= '';
    
        //MAIN HANDLING
        div = <DisplayColour color={ props.color} />;
        div2 = <DisplayColour color={ generateComplementaryColor(props.color)} />;
        if (isDark(props.color, 60)) {
            div3 = <DisplayColour color={ hexAddModifier(props.color, 40, 40, 40)} />;
        } else {
            div3 = <DisplayColour color={ hexSubtractModifier(props.color, 40, 40, 40)} />;
        }
    
  
    return (
        <div>
            {div}
            <p>Complementary:</p>
            {div2}
            <p>Other: </p>
            {div3}
        </div>
    );
}

export default GenerateColors;