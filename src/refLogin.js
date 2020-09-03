import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from './modifier';
import GenerateColors from './ColorGenerator';


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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="favcolor"> </label>
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