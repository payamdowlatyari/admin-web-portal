import React, { Component } from 'react';
import StatsCard from './Charts/StatsCard';
import Dash from './Charts/Dash';

class Optimizer extends Component{
    render (){
        return (

        <div>
        <h1>Optimizer</h1>
        <StatsCard/>
        <hr></hr>
        <Dash/>

        </div>
                 
            );
    }
}

export default Optimizer;