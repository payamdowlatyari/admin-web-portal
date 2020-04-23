import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Home.css';
import opt from '../images/optimizer.png';
import gen from '../images/general.png';
import user from '../images/user.png';
import { NavLink } from 'react-router-dom';



class Home extends Component {

  render() {
    return (
      <Container fluid>

        <h1 className="dashboard"><strong>Dashboard</strong></h1>

        <Row className="card-deck">

          <Col xs="12" md="6" className="card">

            <NavLink className="nav-link" to="/General">
              <Card.Img className="img-link" variant="top" src={gen} />
            </NavLink>

          </Col>

          <Col xs="12" md="6" className="card">
            <NavLink className="nav-link" to="/Optimizer">
              <Card.Img className="img-link" variant="top" src={opt} />
            </NavLink>

          </Col>

          <Col xs="12" md="6" className="card">
            <NavLink className="nav-link" to="/UserAdmin">
              <Card.Img className="img-link" variant="top" src={user} />
            </NavLink>

          </Col>
        </Row>

      </Container>


    );
  }
}

export default Home;