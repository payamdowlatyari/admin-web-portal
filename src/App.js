import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Optimizer from './components/Optimizer';
import UserAdmin from './components/UserAdmin';
import Home from './components/Home';
import Toolbar from './components/Toolbar/Toolbar';
import Footbar from './components/Footbar/Footbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
     <Router basename={process.env.PUBLIC_URL}>
     <Route render = {({ location }) => (
             <Switch location = { location }>

                <Route exact path = '/' component = { Home } />
                <Route exact path = '/Optimizer/' component = { Optimizer } />
                <Route exact path = '/UserAdmin/' component = { UserAdmin } />
                <Route exact path = '/Home' component = { Home } />


              </Switch>
       )} />
      {/* <div className="router"> */}
        {/* <Switch>   
          <Route path="/Optimizer" component={Optimizer}/> 
          <Route path="/UserAdmin" component={UserAdmin}/>
            <Route path="/Home" component={Home}/>      
          <Route path="/" component={ Home } />
        </Switch> */}
      {/* </div> */}
    </Router>
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
