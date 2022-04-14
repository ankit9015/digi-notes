import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "./navbar.css";

function Navbar() {
  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "",
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
      <NavLink
        className="m-s text-lg no-link"
        to="/mockman"
        style={getActiveLinkStyle}
      >
        MockMan
      </NavLink>

      {authState.isLoggedIn && (
        <button
          className="button button-primary text-md"
          onClick={() => logOutHandler()}
        >
          <span>Logout</span>
        </button>
      )}
      <button className="button button-primary text-md">
        <span>Create New Note</span>
      </button>
    </div>
  );
}

export default Navbar;
