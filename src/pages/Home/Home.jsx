import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import "../pages.css";

function Home() {
  const { authState } = useAuth();
  return (
    <div className="hero-wrapper flex-column flex-center">
      <img
        src="./hero-img.svg"
        alt="hero-img digi-note"
        className="hero-image"
      />
      <h1 className="hero-heading H1">
        <span className="app-name">Digi-note</span> to keep you productive
      </h1>
      <div className="hero-links-wrapper flex-row flex-wrap flex-center">
        <button className="button-primary text-lg button">
          <Link to="/notes" className="no-link">
            GET STARTED
          </Link>
        </button>
        {!authState.isLoggedIn && (
          <button className="button-outline-primary text-lg button">
            <Link to="/signup" className=" no-link">
              SIGNUP
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
