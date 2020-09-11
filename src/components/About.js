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
                Generating colour palettes using colour manupilations.
                </p>
            </Container>
            </Jumbotron>
        </div>
    );
}


export default About;