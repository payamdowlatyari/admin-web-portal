import React, { Component } from 'react';
import './Landing.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Landing extends Component {


    render() {
        return (
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col>
                        <h2>Who We Are</h2>

                    </Col>
                    <Col>

                    </Col>
                    <Col>
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
                <Row>
                    <div>
                        <h2>Links</h2>

                    </div><br></br>
                    <p>
                        <a href="http://www.caiso.com/Pages/default.aspx">California ISO</a>

                    </p>
                </Row>
            </Container>
        );
    }
}

export default Landing;