import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';

import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from '../Modifiers/modifier';
import { isDark } from '../Modifiers/colorTester';
import GenerateUI from './UIGenerator';





function GenerateColors(props) {

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
        
            <div className="mainItem">
                <div className="generated-colors">
                    {div} 
                    {div2}
                    {div3}
                </div>

                 <GenerateUI color1={props.color} color2={generateComplementaryColor(props.color)} color3={ hexAddModifier(props.color, 40, 40, 40)} />
        
            </div>
        
       
    );
}

export default GenerateColors;