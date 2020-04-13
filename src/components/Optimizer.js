import React, { Component } from 'react';
import StatsCard from './Charts/StatsCard';
import Dash from './Charts/Dash';
import Box from './Charts/Box';

class Optimizer extends Component{
    render (){
        return (

        <div>
        <h1>Optimizer Performance</h1>
        <hr></hr>

        <StatsCard/>
        <Dash/>
        <Box/>
        </div>
                 
            );
    }
}

export default Optimizer;