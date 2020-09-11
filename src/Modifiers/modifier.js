import React from 'react';
import '../App.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues, checkHighestVal} from './conversion';
import { isDark, isBright } from './colorTester';

//Used to modify the RGB values

/**
 * 
 * @param {*} hex = hex value to modify
 * @param {*} amountR = R value to add
 * @param {*} amountG  = G vaue to add
 * @param {*} amountB = B value to add
 * @returns HEX VALUE
 */
function hexAddModifier(hex, amountR, amountG, amountB) {
    var r = convertHexToRed(hex);
    var g = convertHexToGreen(hex);
    var b = convertHexToBlue(hex);

    var rN = ( r + amountR ) % 255;
    var gN = ( g + amountG ) % 255;
    var bN = ( b + amountB ) % 255;

    return rgbToHex(rN, gN, bN);

}

function generateComplementaryColor(hex) {
    var r = convertHexToRed(hex);
    var g = convertHexToGreen(hex);
    var b = convertHexToBlue(hex);

    var rN = Math.abs( 255 - r) ; 
    var gN = Math.abs( 255 - g) ; 
    var bN = Math.abs( 255 - b) ; 
    
    return rgbToHex(rN, gN, bN);

}



function generateTertiaryColor(hex) {
    if (isDark(hex, 100) == true) {
        if (checkHighestVal(hex) == 1) {
           return hexAddModifier(hex, 40, 10, 10);
            
        } else if (checkHighestVal == 3) {
            return hexAddModifier(hex, 10, 10, 40);
            
        } else {
            return hexAddModifier(hex, 10, 40, 10);
            
        }
    } else if (isBright(hex, 235) == true) {
        if (checkHighestVal(hex) == 1) {
            return hexSubtractModifier(hex, 40, 10, 10);
           
        } else if (checkHighestVal == 3) {
            return hexSubtractModifier(hex, 10, 10, 40);
            
        } else {
            return hexSubtractModifier(hex, 10, 40, 10);
            
        }
    } else if (isDark(hex, 60) == false && isBright(hex, 235) == false ) {
        var h = generateComplementaryColor(hex);
        if (checkHighestVal(hex) == 1) {
           
            return generateComplementaryColor( hexAddModifier(h, 40, -10, 10));
           
        } else if (checkHighestVal == 3) {
           
            return generateComplementaryColor( hexAddModifier(h, -10, 10, 40));
        } else {
            
            return generateComplementaryColor(hexAddModifier(h, 10, 40, -10));
        }
       
        
    }
    return 0;
}

/**
 * 
 * @param {*} hex 
 * @param {*} amountR R value to subtract
 * @param {*} amountG 
 * @param {*} amountB 
 */
function hexSubtractModifier(hex, amountR, amountG, amountB) {
    var r = convertHexToRed(hex);
    var g = convertHexToGreen(hex);
    var b = convertHexToBlue(hex);

    var rN = ( r - amountR ) % 255;
    var gN = ( g - amountG ) % 255;
    var bN = ( b - amountB ) % 255;

    return rgbToHex(rN, gN, bN);

}

export {
    hexAddModifier,
    hexSubtractModifier,
    generateComplementaryColor,
    generateTertiaryColor
};