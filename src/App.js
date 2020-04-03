import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import Footbar from './components/Footbar/Footbar';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebarOpen: true
  //   };
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }
 
  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }
  render() {
  return (
    <div className="App">
      <div className="container">
     <Toolbar />
    
    </div>
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />     
<main></main>
<footer>
<Footbar/>

</footer>
    </div>
  );
  }
}

export default App;
