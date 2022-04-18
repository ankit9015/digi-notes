import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./navbar.css";

function Navbar() {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--secondary-color)" : "var(--primay-color)",
    fontWeight: "bold",
  });

  const { authState, logOutHandler } = useAuth();

  return (
    <div className="flex-column m-l text-md navbar-vertical">
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

      <NavLink
        className="m-s text-lg no-link"
        to="/profile"
        style={getActiveLinkStyle}
      >
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;
