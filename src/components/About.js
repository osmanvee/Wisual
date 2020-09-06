import React from 'react';

import '../App.css';
import '../index.css';
import { Button, InputGroup, FormControl, Jumbotron, Container, Accordion, Form, Table } from 'react-bootstrap';

function About() {

    return(
        <div>
           <Jumbotron fluid>
            <Container>
                <h1>About Wisual</h1>
                <p>
                Wisual uses color theory to generate color schemes for your marketing needs!
                </p>
            </Container>
            </Jumbotron>
        </div>
    );
}


export default About;