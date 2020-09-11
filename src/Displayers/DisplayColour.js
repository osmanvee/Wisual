import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col } from 'react-bootstrap';
import generateRGBbar from './rgbBars';
import GenerateColors from './ColorGenerator';



// Displaying a Colour Component
// color: The Colour to be displayed
class DisplayColour extends React.Component{
        constructor(props) {
          super(props);
          this.state = {
              isSubmitted: false
          }
      }

   

      render() { 
        function copyfunction() {
                  /* Get the text field */
          var copyText = document.getElementById("rand");

          /* Select the text field */
          copyText.select();
          copyText.setSelectionRange(0, 99999); /*For mobile devices*/

          /* Copy the text inside the text field */
          document.execCommand("copy");

          /* Alert the copied text */
          alert("Copied the text: " + copyText.value);
        }


          const mystyle = {
            color: this.props.color,
            backgroundColor: this.props.color,
            
            border: "2px solid #2b2b29",
            borderRadius: "10px",
            fontFamily: "Arial",
          
            hexValue: this.props.hex,
            
          };

          const otherstyle = {
            color: this.props.color,
            
          };


          const imageBlock = (
            <div style={mystyle} >
              <p style={otherstyle}> colour </p>
            </div>
          
          );

          const bar = ( 
          <generateRGBbar color={this.props.color} /> 
          );
    
    return(
      <div>
        <Container>
          <Row>
            <Col sm={4} id="tester69" >{imageBlock} </Col>
            <Col xs={5} >
              <div id="tester">  <ProgressBar  label="R %" variant="danger" now={convertHexToRed(this.props.color)}  /> </div>
              <div id="tester">  <ProgressBar  label="G %" variant="success" now={convertHexToGreen(this.props.color)} /> </div>
              <div id="tester"> <ProgressBar label="B %" variant="info" now={convertHexToBlue(this.props.color)} /> </div>
               </Col>
            <Col id="tt">
            HEX: <b> {this.props.color} </b> {HextoRGBvalues(this.props.color)}
            
           
              

            </Col>
          </Row>
        </Container>
       {bar}
       
       
      </div>
    );
  }
}

  export default DisplayColour;