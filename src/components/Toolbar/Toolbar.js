import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">

        
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"><h5>CalPlug</h5> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Optimizer">Optimizer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/UserAdmin">UserAdmin</a>
            </li>
           
          
          </ul>
      
        </div>
      </nav>

          </header>

          

);

export default toolbar;