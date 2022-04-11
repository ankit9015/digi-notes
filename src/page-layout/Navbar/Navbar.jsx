import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "",
  });

  return (
    <div className="flex-column m-l text-md navbar-vertical">
      <NavLink
        className="m-s text-lg no-link"
        to="/home"
        style={getActiveLinkStyle}
      >
        Home
      </NavLink>

      <NavLink
        className="m-s text-lg no-link"
        to="/archive"
        style={getActiveLinkStyle}
      >
        Archive
      </NavLink>

      <NavLink
        className="m-s text-lg no-link"
        to="/trash"
        style={getActiveLinkStyle}
      >
        Trash
      </NavLink>

      <NavLink
        className="m-s text-lg no-link"
        to="/profile"
        style={getActiveLinkStyle}
      >
        Profile
      </NavLink>

      <button className="button button-primary text-md">
        <span>Create New Note</span>
      </button>
    </div>
  );
}

export default Navbar;
