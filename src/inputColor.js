import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayColour from './Displayers/DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier} from './Modifiers/modifier';

class InputColorForm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        value2: '',
        isSubmitted: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      
    }
  
    handleChange(event) {    
      
      
     
      this.setState({value2: event.target.value}); 
    
      this.setState({value: event.target.value}); 
      
      
    }
    
  
    //Figuring out what to do with the EX colour
    //Testing change again
    handleSubmit(event) {
        
        this.setState({isSubmitted: true}); 
     
      event.preventDefault();
    }

    
  
    render() {
        let div = '';
        /** rgbToHex(convertHexToRed(this.state.value2)+20,
        convertHexToGreen(this.state.value2)+2, convertHexToBlue(this.state.value2)+2);   */
        let newColor = hexAddModifier(this.state.value2, 30, 30, 30);
      
        if (this.state.isSubmitted) {
          
        div =
        <div> 
         <DisplayColour color= {newColor} />
         <h1>
          
          New RGB val: {HextoRGBvalues(newColor)}
          </h1>
        </div> 
        } else {
            div = <p>Select a colour first</p>;
        }
    return (
      
      <div>
      <form onSubmit={this.handleSubmit}>
        <label for="favcolor">
          Select a Color:
        </label>
        <input type="color" id="favcolor" name="favcolor" value={this.state.value} onChange={this.handleChange}/>       
        <input type="submit" value="Submit" />
      </form>
        

        <DisplayColour color={this.state.value} />
        {div}
        
       
      </div>
      
    );
    }
  }

  export default InputColorForm;