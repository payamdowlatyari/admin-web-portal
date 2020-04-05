import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Optimizer from './components/Optimizer';
import UserAdmin from './components/UserAdmin';
import Toolbar from './components/Toolbar/Toolbar';
import Footbar from './components/Footbar/Footbar';
import BarChart from './components/Charts/BarChart';
import BubbleExample from './components/Charts/Bubble';
import ScatterExample from './components/Charts/Scatter';
import PolarExample from './components/Charts/Polar';
import RadarExample from './components/Charts/Radar';
import DoughnutExample from './components/Charts/Doughnut';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Los Angeles', 'San Diego', 'San Francisco', 'San Jose', 'Sacramento', 'Irvine'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render() {

  return (
    <div className="App">

      <div className="container">
     <Toolbar />


    </div>
    
    <div className="main-content">
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />     

    
<div className="container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>

<Router>

      <div className="router">
        <Switch>
          
          <Route path="/Optimizer">
            <Optimizer />
          </Route>
          <Route path="/UserAdmin">
            <UserAdmin />
          </Route>
          <Route path="/">
          <div>
              <BarChart chartData={this.state.chartData} location="California" legendPosition="bottom"/>
              <BubbleExample/>
              <ScatterExample/>
              <PolarExample/>
              <RadarExample/>
              <DoughnutExample/>


              </div>
          </Route>
        </Switch>
      </div>
    </Router>
</div>
    </div>
    <footer>

<Footbar/>

</footer>

    </div>
  );
  }
}

export default App;
