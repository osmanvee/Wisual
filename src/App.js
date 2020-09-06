import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import './index.css';
import InputColorForm from './inputColor';
import DisplayColour from './Displayers/DisplayColour';
import LoginForm from './refLogin';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import favicon from './images/favicon.ico.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Navbar, Nav, NavDropdown, Accordion, Form, Table } from 'react-bootstrap';
import favicon2 from './images/fav2.svg'
function App() {
  
  var val = '';
  var dix = '';
  const logoStyle = {
    width: "140px",
    height: "50px",
    
  };

 

  return (
    
      
      <div className="App">
        
      
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">
          <img
        src={logo}
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        
        
      

       
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
       
        </Switch>
          
        <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
          <Navbar.Brand href="#home">
          <img
        src={favicon2}
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
          <Navbar.Text>
          Wisual 2020 CopyRights 
          </Navbar.Text>
            
          </Navbar.Collapse>
        </Navbar>

        
      </div>
      
  );
}





export default App;
