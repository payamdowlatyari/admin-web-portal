import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FaChartPie, FaChartBar, FaUser, FaRegCalendarCheck } from 'react-icons/fa';
import { MdHelp } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";


export default props => {
  return (
    <div className="side-bar">
      <Menu {...props}>

        <NavLink className="menu-item" to="/Home"> <h4><strong>Dashboard</strong></h4></NavLink>
        <br></br>

        <NavLink className="menu-item" to="/General"><FaChartBar /> General Performance</NavLink>
        <NavLink className="menu-item" to="/Optimizer"><FaChartPie /> Optimizer Performance</NavLink>
        <NavLink className="menu-item" to="/UserAdmin"><FaUser /> User Administration</NavLink>
        <NavLink className="menu-item" to="/Home"><AiTwotoneSetting /> Settings</NavLink>
        <NavLink className="menu-item" to="/Home">< MdHelp /> Help Center</NavLink>
        <NavLink className="menu-item" to="/Home">< FaRegCalendarCheck /> Calendar</NavLink>
        <NavLink className="menu-item" to="/Home">< IoMdAnalytics /> Analytics</NavLink>

      </Menu>

    </div>

  );
};