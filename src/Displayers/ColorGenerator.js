import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../index.css';

import DisplayColour from './DisplayColour';
import {convertHexToRed, convertHexToGreen, convertHexToBlue, rgbToHex, HextoRGBvalues} from '../Modifiers/conversion';
import {hexAddModifier, hexSubtractModifier, generateComplementaryColor, generateTertiaryColor} from '../Modifiers/modifier';
import { isDark } from '../Modifiers/colorTester';
import GenerateUI from './UIGenerator';
import DisplaySecondaryColor from './secondaryColors';

import { Button, InputGroup, FormControl, Container, ProgressBar, Row, Col, Card } from 'react-bootstrap';





function GenerateColors(props) {

    const eh1 = {
       color: props.color
    };
    const eh2 = {
        color: generateComplementaryColor(props.color)
     };
     const eh3 = {
        color: hexSubtractModifier(props.color, 40, 40, 40)
     };

    let div = '';
    let div2 = '';
    let div3= '';
    
        //MAIN HANDLING
        div = <DisplayColour color={ props.color} /> ;
        div2 = <DisplayColour color={ generateComplementaryColor(props.color)} />;
        div3 = <DisplayColour color={generateTertiaryColor(props.color)} />;
    
  
    return (
        <Card body > 
        <div> 
            <Container>
                <Row>
                            <Col xs={12} md={8}>
                            <Container id="tester3" fluid>
                                <Row>
                                    <Col id="tester">{div}</Col> 
                                                    
                                </Row>
                                <Row>
                                <Col id="tester">{div2}</Col>  
                                </Row>
                                <Row >
                                <Col id="tester">{div3}</Col>
                                </Row>
                            </Container>
                            </Col>
                            <Col xs={6} md={4}>

                            <Container>
                                    <Row>
                                    <GenerateUI color1={props.color} color2={generateComplementaryColor(props.color)} color3={ hexAddModifier(props.color, 40, 40, 40)} />
                                    </Row>
                                </Container>
                            </Col>
                </Row>
                <Row> 
                <Col> 
                <h1 style={eh1}>heading 1</h1>
                <h2 style={eh2}>heading 2</h2>
                <h3 style={eh3}>heading 3</h3>
                </Col>
                <Col>
                <br/>
                <Card body>
            <Container>
                <Row>
                    
                    <Col>
                    <DisplaySecondaryColor color={generateComplementaryColor(props.color)}  />
                    </Col>
                    <Col>
                    <DisplaySecondaryColor color={generateTertiaryColor(hexAddModifier(props.color, 30, 30, 40))}  />
                    </Col>
                    <Col>
                    <DisplaySecondaryColor color={generateComplementaryColor(hexSubtractModifier(props.color, 20, 65, 30))}  />
                    </Col>
                </Row>
            </Container>
        </Card>
               
               
                </Col>
                </Row>
            </Container>
            


            
           
        </div>
            
            </Card>
        
       
    );
}


function GenerateColorsTwo(props) {

    const mainColor = props.color;
    const SecondaryColor =  generateComplementaryColor(hexAddModifier(props.color,20,30,20));
    const TertiaryColor =  generateTertiaryColor(hexAddModifier(props.color, 30, 20, 20));
    const eh1 = {
       color: props.color
    };
    const eh2 = {
        color: SecondaryColor
     };
     const eh3 = {
        color: TertiaryColor
     };

    let div = '';
    let div2 = '';
    let div3= '';
    
        //MAIN HANDLING
        div = <DisplayColour color={ props.color} /> ;
        div2 = <DisplayColour color={SecondaryColor} />;
        div3 = <DisplayColour color={TertiaryColor} />;
    
  
    return (
        <Card body > 
        <div> 
            <Container>
                <Row>
                            <Col xs={12} md={8}>
                            <Container id="tester3" fluid>
                                <Row>
                                    <Col id="tester">{div}</Col> 
                                                    
                                </Row>
                                <Row>
                                <Col id="tester">{div2}</Col>  
                                </Row>
                                <Row >
                                <Col id="tester">{div3}</Col>
                                </Row>
                            </Container>
                            </Col>
                            <Col xs={6} md={4}>

                            <Container>
                                    <Row>
                                    <GenerateUI color1={props.color} color2={ SecondaryColor} color3={ TertiaryColor} />
                                    </Row>
                                </Container>
                            </Col>
                </Row>
                <Row> 
                    <Col> 
                    <h1 style={eh1}>heading 1</h1>
                    <h2 style={eh2}>heading 2</h2>
                    <h3 style={eh3}>heading 3</h3>
                    </Col>
                    <Col>
                    <br/>
                    <Card body>
                <Container>
                    <Row>
                        
                        <Col>
                        <DisplaySecondaryColor color={SecondaryColor}  />
                        </Col>
                        <Col>
                        <DisplaySecondaryColor color={hexAddModifier(TertiaryColor, 30, 30, 40)}  />
                        </Col>
                        <Col>
                        <DisplaySecondaryColor color={hexSubtractModifier(SecondaryColor, 20, 65, 30)}  />
                        </Col>
                    </Row>
                </Container>
            </Card>
                
                
                    </Col>
                </Row>
            </Container>
            


            
           
        </div>
            
            </Card>
        
       
    );
}

function GenerateColorsThree(props) {

    const mainColor = props.color;
    const SecondaryColor =  generateComplementaryColor(hexSubtractModifier(props.color,20,30,20));
    const TertiaryColor =  generateTertiaryColor(hexAddModifier(props.color, 10, 80, 20));
    const eh1 = {
       color: props.color
    };
    const eh2 = {
        color: SecondaryColor
     };
     const eh3 = {
        color: TertiaryColor
     };

    let div = '';
    let div2 = '';
    let div3= '';
    
        //MAIN HANDLING
        div = <DisplayColour color={ props.color} /> ;
        div2 = <DisplayColour color={SecondaryColor} />;
        div3 = <DisplayColour color={TertiaryColor} />;
    
  
    return (
        <Card body > 
        <div> 
            <Container>
                <Row>
                            <Col xs={12} md={8}>
                            <Container id="tester3" fluid>
                                <Row>
                                    <Col id="tester">{div}</Col> 
                                                    
                                </Row>
                                <Row>
                                <Col id="tester">{div2}</Col>  
                                </Row>
                                <Row >
                                <Col id="tester">{div3}</Col>
                                </Row>
                            </Container>
                            </Col>
                            <Col xs={6} md={4}>

                            <Container>
                                    <Row>
                                    <GenerateUI color1={props.color} color2={ SecondaryColor} color3={ TertiaryColor} />
                                    </Row>
                                </Container>
                            </Col>
                </Row>
                <Row> 
                    <Col> 
                    <h1 style={eh1}>heading 1</h1>
                    <h2 style={eh2}>heading 2</h2>
                    <h3 style={eh3}>heading 3</h3>
                    </Col>
                    <Col>
                    <br/>
                    <Card body>
                <Container>
                    <Row>
                        
                        <Col>
                        <DisplaySecondaryColor color={SecondaryColor}  />
                        </Col>
                        <Col>
                        <DisplaySecondaryColor color={hexAddModifier(TertiaryColor, 30, 30, 40)}  />
                        </Col>
                        <Col>
                        <DisplaySecondaryColor color={hexSubtractModifier(SecondaryColor, 20, 65, 30)}  />
                        </Col>
                    </Row>
                </Container>
            </Card>
                
                
                    </Col>
                </Row>
            </Container>
            


            
           
        </div>
            
            </Card>
        
       
    );
}

export {
    GenerateColors,
    GenerateColorsTwo,
    GenerateColorsThree
};