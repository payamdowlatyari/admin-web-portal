import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

export default props => {
  return (
    <div className="side-bar">
 <Menu {...props}>
   
    <NavLink className="menu-item" to="/Home">Home</NavLink>
    <NavLink className="menu-item" to="/Optimizer">Optimizer</NavLink>
    <NavLink className="menu-item" to="/UserAdmin">UserAdmin</NavLink>

    <div className="sidebar-text">
      <h6>
      CalPlug &copy; {new Date().getFullYear()} 

      </h6>

  </div>
  </Menu>
 
    </div>
   
  );
};