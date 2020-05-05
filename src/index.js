import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from '@material-ui/core';

// Login Component 
function Login(props) {
  return (
    <button className="btn btn-primary btn-block" onClick={props.clickFunc}>
      Login
           </button>
  );
}

// Logout Component 
function Logout(props) {
  return (
    <button className="btn btn-primary" onClick={props.clickFunc}>
      Logout
           </button>
  );
}
class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };

    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked() {
    this.setState({ isLoggedIn: false });
  }

  render() {

    return (

      <div>
        {
          (this.state.isLoggedIn) ? (

            <div>
              {/* <Logout clickFunc={this.ifLogoutClicked} /> */}
              <App />
            </div>

          ) : (
              <div>

                <Container style={{ marginTop: '25vh' }}>
                  <Row>
                    <Col xs={12} md={6} lg={4}>
                      <h2>Who We Are</h2>
                      <div >
                        The Administrative Web Portal that will provide varying controls over the entire population of Smart EVSE through the Admin Interface,
                        alongside individual customer EVSE support through the Management Console.
                            {/* <NavLink style={{ textAlign: 'right' }} className="nav-link" to="/Contact">Contact Us</NavLink> */}
                      </div>
                      <div style={{
                        position: 'sticky',
                        marginTop: '50px',
                        textAlign: 'center'
                      }}>
                        CalPlug &copy; {new Date().getFullYear()} | All Rights Reserved
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

                        {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                        <Login clickFunc={this.ifLoginClicked} />
                        <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                        </p>
                      </form>
                    </Col>
                  </Row>
                </Container>

              </div>
            )
        }

      </div>

    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
