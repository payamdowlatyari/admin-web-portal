import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Contact from './components/Contact';
import { IoMdContact, IoMdPower } from 'react-icons/io';

// Contact Component
function ContactUs(props) {

  return <a outline color="primary"
    style={{
      cursor: 'pointer',
      position: 'absolute',
      top: '10px',
      right: '50px',
      fontSize: '30px'
    }}
    onClick={props.clickFunc}>
    <IoMdContact />
  </a>

}

// Login Component 
function Login(props) {
  return (
    <a
      outline color="primary"
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '15px',
        fontSize: '30px'

      }}
      onClick={props.clickFunc}>
      <IoMdPower />
    </a>
  );
}

// Logout Component 
function Logout(props) {
  return (
    <a
      outline color="primary"
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '70px',
        right: '15px',
        fontSize: '30px'

      }}
      onClick={props.clickFunc}>
      <IoMdPower />
    </a>
  );
}

// Parent Homepage Component 
class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false, isContact: false };

    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    this.contactUsClicked = this.contactUsClicked.bind(this);
    this.notContactUsClicked = this.notContactUsClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked() {
    this.setState({ isLoggedIn: false });
  }

  contactUsClicked() {

    this.setState({ isContact: true });
  }

  notContactUsClicked() {
    this.setState({ isContact: false });

  }

  render() {

    return (

      <div>

        {
          (this.state.isLoggedIn) ? (
            <div>
              <App />
              <Logout clickFunc={this.ifLogoutClicked} />
            </div>

          ) : (

              (this.state.isContact) ? (
                <div>
                  <Login clickFunc={this.ifLoginClicked} />
                  <ContactUs clickFunc={this.notContactUsClicked} />
                  <Contact clickFunc={this.notContactUsClicked} />
                </div>

              ) : (
                  <div>

                    <Login clickFunc={this.ifLoginClicked} />
                    <ContactUs clickFunc={this.contactUsClicked} />
                    <Landing />
                  </div>
                )
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
