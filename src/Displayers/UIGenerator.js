import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor} from '../Modifiers/modifier';
import { isDark } from '../Modifiers/colorTester';
import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col, Card, Modal } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/**
 * 
 * @param {*} color1 = Main Header, color2=Side Bar, color3=other 
 */
function GenerateUI(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const canvas = {
        width: "150px",
        height: "150px",
        backgroundColor: "white",
        display: "",
        
        marginLeft: "20px",
        border: "2px solid #2b2b29",
        marginBottom: "10px",
        marginRight: "10px"
      
    };

    const one = {
        display: "flex",
        fontSize: "10px"
    }; 
    const headerStyle = {
        backgroundColor: props.color1,
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "25%",
        fontSize: "10px"
        
    };

    const columnStyle = {
        backgroundColor: props.color2,
        float: "left",
        height: "75%",
        width: "25%",
        fontSize: "10px",
        allignSelf: "start",
        fontSize: "8px",
        color: props.color1
    };

    const columnStyle2 = {
        backgroundColor: "white",
        float: "left",
        width: "75%",
        fontSize: "10px",
        color: props.color3
    };

    const ul = {
        
    };
   
    const footerStyle = {
        backgroundColor: props.color3,
        height: "10px",
        padding: "0px",
        fontSize: "10px"
    };

    return (
        
        <Card body> 
        Concept UI
        <div style={canvas}>
            
                <div style={headerStyle}>
                    Header
                </div>
                <div style={columnStyle2}>
                    Content here for your page
                </div>
                <div style={columnStyle}>
                    SideBar <br/>
                    Link1<br/> Link2<br/> Link3 
                </div>
            < span id="htmlButton" > 
                <Button variant="outline-info" onClick={handleShow} size="sm">View HTML/CSS</Button>{' '}
                </span>
                <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
                    <Modal.Title>UI (HTML/CSS) code</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <b>Color 1: </b> {props.color1} | 
                      <b> Color 2:</b> {props.color2} | 
                      <b> Color 3:</b> {props.color3} <br/>
                      <b>CSS:</b> <br/>
                      <code>{".header {"} </code> <br/>
                        <code>{"background: "} </code> <code>{props.color1}</code> <code>{";"}</code> <br/>
                      <code>{"text-align: center;"} </code> <br/>
                      <code>{"color: "} </code> <code>{props.color2}</code> <code>{";"}</code> <br/>
                      <code>{"font-size: 80px"} </code> <br/>
                      <code>{"}"} </code> <br/>
                      <code>{".content {"} </code> <br/>
                        <code>{"background: white;"} </code> <br/>
                      <code>{"float: left;"} </code> <br/>
                      <code>{"color: "} </code> <code>{props.color3}</code> <code>{";"}</code> <br/>
                      <code>{"width: 75%"} </code> <br/>
                      <code>{"font-size: 40px"} </code> <br/>
                      <code>{"}"} </code> <br/>
                      <code>{".column {"} </code> <br/>
                      <code>{"background: "} </code> <code>{props.color2}</code> <code>{";"}</code> <br/>
                      <code>{"text-align: center;"} </code> <br/>
                      <code>{"color: "} </code> <code>{props.color1}</code> <code>{";"}</code> <br/>
                      <code>{"width: 160px"} </code> <br/>
                      <code>{"height: 100%;"} </code> <br/>
                      <code>{"position: fixed;"} </code> <br/>
                      <code>{" z-index: 1;"} </code> <br/>
                      <code>{"top: 0;"} </code> <br/>
                      <code>{"right: 0;"} </code> <br/>
                      <code>{"overflow-x: hidden;"} </code> <br/>
                      <code>{"padding-top: 20px;"} </code> <br/>
                      <code>{"font-size: 30px;"} </code> <br/>
                      <code>{"}"} </code> <br/>
                      <br/> <b>HTML:</b> <br/>
                      <code>{"<!DOCTYPE html>"} </code> <br/>
                      <code>{"<head>"} </code> <br/>
                      <code>{"  <meta charset=\"UTF-8\">"} </code> <br/>
                      <code>{" <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"} </code> <br/>
                      <code>{"</head>"} </code> <br/>
                      <code>{"<body>"} </code> <br/>
                      <code>{"<div class=\"header\">"} </code> <br/>
                      <code>{"<h1>Header</h1>"} </code> <br/>
                      <code>{"</div>"} </code> <br/>
                      <code>{"<div class=\"content\">"} </code> <br/>
                      <code>{"<p>Content here for your page</p>"} </code> <br/>
                      <code>{"</div>"} </code> <br/>
                      <code>{"<div class=\"column\">"} </code> <br/>
                      <code>{"<p>Side Links</p>"} </code> <br/>
                      <code>{"</div>"} </code> <br/>
                      <code>{"</body>"} </code> <br/>
                      <code>{"</html>"} </code> <br/>

                      
                      

                    </Modal.Body>

                    
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                  
                    </Modal.Footer>
      </Modal>
        </div>
        </Card>
    );
}

export default GenerateUI;