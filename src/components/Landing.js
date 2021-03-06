import React, { Component } from 'react';
import './Landing.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from '@material-ui/core';

class Landing extends Component {


    render() {
        return (
            <Container style={{ marginTop: '25vh' }}>
                <Row>

                    <Col xs={12} md={6} lg={4}>
                        <h3>Who We Are</h3>
                        <div >
                            The Administrative Web Portal that will provide varying controls over the entire population of Smart EVSE through the Admin Interface,
                            alongside individual customer EVSE support through the Management Console.
                            <p style={{ top: '80px', button: '10px', position: 'relative' }}>
                                CalPlug &copy; {new Date().getFullYear()} | All Rights Reserved
                            </p>
                            <div className="social-link">
                                <button class="fa fa-envelope"></button>
                                <button class="fa fa-phone"></button>
                                <button class="fa fa-twitter"></button>
                                <button class="fa fa-facebook"></button>
                                <button class="fa fa-linkedin"></button>
                                <button class="fa fa-github"></button>
                                <button class="fa fa-google"></button>
                                <button class="fa fa-youtube"></button>
                            </div>

                        </div>
                    </Col>
                    <Col style={{ marginLeft: '100px' }}>
                        <Divider orientation="vertical" />

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <form className="login">
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>

                        </form>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Landing;