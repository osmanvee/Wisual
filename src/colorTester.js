import React from 'react';
import logo from './logo.svg';
import './App.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';

/**
 * 
 * @param {*} hex 
 * @param {*} amount  threshold for darkness
 */
function isDark (hex, amount) {
    var r = convertHexToRed(hex);
    var g = convertHexToGreen(hex);
    var b = convertHexToBlue(hex);

    if (r < amount && b<amount && g<amount) {
        return true;
    } else {
        return false;
    }
}

export {
    isDark
};