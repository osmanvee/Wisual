import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import './index.css';
import InputColorForm from './inputColor';
import DisplayColour from './DisplayColour';
import LoginForm from './refLogin';

function App() {
  
  var val = '';
  var dix = '';
  const logoStyle = {
    width: "140px",
    height: "50px",
    
  };

 

  return (
    <div className="App">
    <div className="logo-bar">
     <div> <img src={logo} style={logoStyle} alt="WISUAL" /> </div>
      
    </div>
    
      
      
    <div className="topnav">
       <a href="#">Home</a> 
        <a href="#">Other</a>
        <a href="#">Other</a>
    </div>

    <div className="head">
    <div className="mainfont"> Select a color: </div>
    <div><LoginForm /> </div>
    
    </div>
    
    
      <div className="footer">
        <p>2020 CopyRights</p>
      </div>
    </div>
  );
}





export default App;
