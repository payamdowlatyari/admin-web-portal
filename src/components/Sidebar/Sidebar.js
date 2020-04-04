import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';

export default props => {
  return (
    <div>
 <Menu {...props}>
    <a className="menu-item" href="/">
      Home
    </a>

    <a className="menu-item" href="/burgers">
      Link
    </a>

    <a className="menu-item" href="/pizzas">
    Link
    </a>

    <a className="menu-item" href="/desserts">
    Link
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