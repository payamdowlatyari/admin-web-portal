import React, { Component } from 'react';
import Box from './Charts/Box';
import Container from 'react-bootstrap/Container';


class Optimizer extends Component{
    
    render (){
        return (
        <Container>
            <br></br>
                <h1>Optimizer Performance</h1>
            <hr></hr>           
                <Box/>
        </Container>
            );
    }
}

export default Optimizer;