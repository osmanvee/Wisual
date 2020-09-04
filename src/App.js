import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import './index.css';
import InputColorForm from './inputColor';
import DisplayColour from './Displayers/DisplayColour';
import LoginForm from './refLogin';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  
  var val = '';
  var dix = '';
  const logoStyle = {
    width: "140px",
    height: "50px",
    
  };

 

  return (
    <div>
      
      <div className="App">
        <div className="logo-bar">
          <div> <img src={logo} style={logoStyle} alt="WISUAL" /> </div>
        
        </div>
      
      
        
        <div className="topnav">
        <Link to="/">Home </Link>
        <Link to="/about">About</Link>
      
        </div>

       
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
       
        </Switch>
          
          <div className="footer">  
          </div>

        
      </div>
    </div>
  );
}





export default App;
