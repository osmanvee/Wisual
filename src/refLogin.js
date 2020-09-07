import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import DisplayColour from './Displayers/DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from './Modifiers/modifier';
import GenerateColors from './Displayers/ColorGenerator';
import { Button, InputGroup, Card, FormControl, Navbar, Badge, NavDropdown, Accordion, Form, Table, Container, Row, Col } from 'react-bootstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false
        }
    }
    

    handleSubmit = event => {
      event.preventDefault();
      
      this.setState({isSubmitted: true});
      
       
    };
   
    render() {
        let div = '';
        if(this.state.isSubmitted) {
            //MAIN HANDLING
           div  = <GenerateColors color={this.input.value} />
        }
      return (
        <div>
            <Card>             
              <Card.Body>
                <Card.Title>Select a color</Card.Title>
                <Card.Text>
                  Please use '#rrggbb' format if you're using a phone
                </Card.Text>
                <form onSubmit={this.handleSubmit} >
                    <input
                      type="color"
                      name="favcolor"
                      ref={(input) => this.input = input}
                    /> 
                    <span id="colorInput"> 
                      <Button variant="outline-success" type="submit" size="sm"  >
                        Wisualize
                      </Button>
                    </span>
                  </form>               
              </Card.Body>
            </Card>
          {div}
        </div>
      );
    }
   }

   export default LoginForm;