import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Optimizer from './components/Optimizer';
import UserAdmin from './components/UserAdmin';
import General from './components/General';
import Home from './components/Home';
import Toolbar from './components/Toolbar/Toolbar';
import Footbar from './components/Footbar/Footbar';
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

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

                <Route exact path = '/' component = { Home } />
                <Route exact path = '/Home' component = { Home } />
                <Route exact path = '/admin-web-portal' component = { Home } />
                <Route exact path = '/General' component = { General } />
                <Route exact path = '/Optimizer/' component = { Optimizer } />
                <Route exact path = '/UserAdmin/' component = { UserAdmin } />

            </Switch>
  
    </Container>
    </div>
     
    <Container>
      <Footbar/>
    </Container>

    </div>
  );
  }
}

export default App;
