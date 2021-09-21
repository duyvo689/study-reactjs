import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact="true">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/news">
          News
        </NavLink>
        <NavLink activeClassName="active" to="/user">
          User
        </NavLink>
      </div>
    );
  }
}

export default Nav;
