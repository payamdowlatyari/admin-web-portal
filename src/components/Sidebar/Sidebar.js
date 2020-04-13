import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import {FaChartPie, FaChartBar, FaUser} from 'react-icons/fa';

export default props => {
  return (
    <div className="side-bar">
 <Menu {...props}>
 
    <NavLink className="menu-item" to="/Home"> <h4><strong>Dashboard</strong></h4></NavLink>
    <br></br>
    
        <NavLink className="menu-item" to="/General"><FaChartBar/> General Performance</NavLink>
    <NavLink className="menu-item" to="/Optimizer"><FaChartPie/> Optimizer Performance</NavLink>
    <NavLink className="menu-item" to="/UserAdmin"><FaUser/> User Administration</NavLink>

    <div className="sidebar-text">
      {/* <h6>
      CalPlug &copy; {new Date().getFullYear()} 

      </h6> */}

  </div>
  </Menu>
 
    </div>
   
  );
};