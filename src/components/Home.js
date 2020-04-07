import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarChart from './Charts/BarChart';
import BubbleExample from './Charts/Bubble';
import ScatterExample from './Charts/Scatter';
import PolarExample from './Charts/Polar';
import RadarExample from './Charts/Radar';
import DoughnutExample from './Charts/Doughnut';

class Home extends Component{
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
    render (){
        return (
        <div>
           <Container>
                <Row>
                  <Col>
                  <BarChart chartData={this.state.chartData} location="California" legendPosition="bottom"/>

                  </Col>
                  <Col>
                  <BubbleExample/>
                  <ScatterExample/>
              <PolarExample/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <RadarExample/>

                  </Col>
                  <Col>
                  <DoughnutExample/>

                  </Col>
                </Row>

              </Container>

        </div>
            
            
            );
    }
}

export default Home;