import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputColorForm from './inputColor';
import DisplayColour from './DisplayColour';
import LoginForm from './refLogin';

function App() {
  
  var val = '';
  var dix = '';
  
  return (
    
    <div className="App">
      <div className="navbar">
          <p><b>WIS</b>UAL</p>
      </div>
      <header className="App-header">
     
        
      <LoginForm />
      
       


      </header>
      

      <div className="footer">
        <p>2020 CopyRights</p>
      </div>
    </div>
  );
}





export default App;
