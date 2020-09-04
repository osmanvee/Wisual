import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from '../Modifiers/modifier';
import { isDark } from '../Modifiers/colorTester';

/**
 * 
 * @param {*} color1 = Main Header, color2=Side Bar, color3=other 
 */
function GenerateUI(props) {

    const mainCanvas = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        backgroundColor: "#2b2b29",
        fontSize: "10px"
    };

    const canvas = {
        width: "150px",
        height: "150px",
        backgroundColor: "white",
        display: "",
        fontSize: "10px",
        marginLeft: "20px",
        border: "2px solid #2b2b29",
        marginBottom: "10px",
        marginRight: "10px"
      
    };

    const one = {
        display: "flex"
    }; 
    const headerStyle = {
        backgroundColor: props.color1,
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "25%"
        
    };

    const columnStyle = {
        backgroundColor: props.color2,
        float: "left",
        height: "75%",
        width: "25%",
      
        allignSelf: "start",
        fontSize: "8px",
        color: props.color1
    };

    const columnStyle2 = {
        backgroundColor: "white",
        float: "left",
        width: "75%",
        color: props.color3
    };

    const ul = {
        
    };
   
    const footerStyle = {
        backgroundColor: props.color3,
        height: "10px",
        padding: "0px"
    };

    return (
        <div style={mainCanvas}>
            Concept UI:
        <div style={canvas}>
            
                <div style={headerStyle}>
                    Header
                </div>
                <div style={columnStyle2}>
                    Content here for your page
                </div>
                <div style={columnStyle}>
                    SideBar <br/>
                    Link1<br/> Link2<br/> Link3 
                </div>
           
                
        </div>
        </div>
    );
}

export default GenerateUI;