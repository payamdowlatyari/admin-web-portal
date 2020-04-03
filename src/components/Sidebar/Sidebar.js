import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
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
  </Menu>
  );
};