import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';

export default props => {
  return (
    <div className="side-bar">
 <Menu {...props}>
    <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/Optimizer">
    Optimizer
    </a>

    <a className="menu-item" href="/UserAdmin">
    UserAdmin
    </a>

    <div className="sidebar-text">
      <small>
      CalPlug &copy; {new Date().getFullYear()} 

      </small>

  </div>
  </Menu>
 
    </div>
   
  );
};