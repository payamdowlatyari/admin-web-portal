import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import Footbar from './components/Footbar/Footbar';
import BarChart from './components/Charts/BarChart';

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
    <div>
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />     
    <div className="container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
              <BarChart chartData={this.state.chartData} location="California" legendPosition="bottom"/>

              </div>
<div className="container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
<footer className="navbar-fixed-bottom">

<Footbar/>

</footer>
</div>
    </div>

    </div>
  );
  }
}

export default App;
