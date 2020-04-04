import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">

        
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          
          </ul>
      
        </div>
      </nav>

          </header>

          

);

export default toolbar;