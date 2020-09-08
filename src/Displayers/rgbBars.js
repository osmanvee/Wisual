import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Button, InputGroup, FormControl, Container, ProgressBar } from 'react-bootstrap';

function generateRGBbar(props) {
    return (
             <div>
                <ProgressBar label="R %" variant="danger" now={convertHexToRed(props.color)} />
                <ProgressBar  label="G %" variant="success" now={convertHexToGreen(props.color)} />
                <ProgressBar label="B %" variant="info" now={convertHexToBlue(props.color)} />
            </div>
    );
}

export default generateRGBbar;