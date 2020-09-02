import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from './conversion';

class InputColorForm extends React.Component {
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
      this.setState({value: event.target.value}); 
      this.setState({value2: event.target.value}); 
      
    }
  
    //Figuring out what to do with the EX colour
    //Testing change again
    handleSubmit(event) {
        let g = this.state.value2;
        this.setState({isSubmitted: true}); 
     
      event.preventDefault();
    }

    
  
    render() {
        let div = '';
        let newColor = rgbToHex(convertHexToRed(this.state.value2)+20,
        convertHexToGreen(this.state.value2)+2, convertHexToBlue(this.state.value2)+2);
      
        if (this.state.isSubmitted) {
          
        div =
        <div> 
         <DisplayColour color= {newColor} />
         <h1>
          RGB val: ( {convertHexToRed(this.state.value2)} , {convertHexToGreen(this.state.value2)}  ,{convertHexToBlue(this.state.value2)}    )
          New RGB val: {HextoRGBvalues(newColor)}
          </h1>
        </div> 
        } else {
            div = '';
        }
    return (
      
      <div>
      <form onSubmit={this.handleSubmit}>
      <label for="favcolor">
        Select a Color:</label>
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