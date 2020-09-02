import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';
import {hexAddModifier, hexSubtractModifier} from './modifier';

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
        let div2 = '';
        if(this.state.isSubmitted) {
            div = <DisplayColour color={ this.input.value} />;
            div2 = <DisplayColour color={ this.input.value} />;
        }
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="favcolor">Select a colour: </label>
          <input
            type="color"
            name="favcolor"
            ref={(input) => this.input = input}
          />
           <input type="submit" value="Submit" />
        </form>
        {div}
        </div>
      );
    }
   }

   export default LoginForm;