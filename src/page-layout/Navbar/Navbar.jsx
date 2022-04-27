import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./navbar.css";

function Navbar(props) {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--secondary-color)" : "var(--primay-color)",
    fontWeight: "bold",
  });

  const { authState, logOutHandler } = useAuth();

  return (
    <div
      className={`flex-column p-l text-md navbar-vertical ${
        props.showNavbar ? "navbar-visible" : ""
      }`}
    >
      <NavLink
        className="m-s text-lg no-link"
        to="/notes"
        style={getActiveLinkStyle}
      >
        Notes
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
        to="/label"
        style={getActiveLinkStyle}
      >
        Label
      </NavLink>

      <NavLink
        className="m-s text-lg no-link"
        to="/trash"
        style={getActiveLinkStyle}
      >
        Trash
      </NavLink>
      <button
        className="button button-primary logout-button"
        onClick={() => logOutHandler()}
      >
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Navbar;
