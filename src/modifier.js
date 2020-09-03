import React from 'react';
import logo from './logo.svg';
import './App.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';

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
    generateComplementaryColor
};