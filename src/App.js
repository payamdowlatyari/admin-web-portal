import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Optimizer from './components/Optimizer';
import UserAdmin from './components/UserAdmin';
import Settings from './components/Settings';
import General from './components/General';
import Home from './components/Home';
import Landing from './components/Landing';
import Toolbar from './components/Toolbar/Toolbar';
import Footbar from './components/Footbar/Footbar';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import CreateUser from './components/Data/CreateUser';
import CreateProfile from './components/Data/CreateProfile';
import EditProfile from './components/Data/EditProfile';

class App extends Component {

  render() {

    return (

      <div className="App">
        <Container>
          <Toolbar />
        </Container>

        <div className="main-content">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <Container style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <Switch>

              <Route exact path='/' component={Landing} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/admin-web-portal' component={Landing} />
              <Route exact path='/General' component={General} />
              <Route exact path='/Optimizer/' component={Optimizer} />
              <Route exact path='/UserAdmin/' component={UserAdmin} />
              <Route exact path='/Settings/' component={Settings} />
              <Route exact path='/Contact/' component={Contact} />
              <Route exact path='/Analytics/' component={Analytics} />
              <Route path="/EditProfile/:id" component={EditProfile} />
              <Route path="/CreateProfile" component={CreateProfile} />
              <Route path="/CreateUser" component={CreateUser} />

            </Switch>

          </Container>
        </div>

        <Container>
          <Footbar />
        </Container>

      </div>
    );
  }
}

export default App;
