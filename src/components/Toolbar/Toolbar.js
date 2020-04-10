import React from 'react';
import './Toolbar.css';
import {NavLink} from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar">
      
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/"><h5>CalPlug</h5> <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Optimizer">Optimizer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/UserAdmin">UserAdmin</NavLink>
            </li>
                     
          </ul>
      
        </div>
      </nav>

          </header>

          

);

export default toolbar;