import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

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
      <div className="hero-links-wrapper flex-row flex-center">
        <Link
          to="/notes"
          className="button-primary text-lg button no-link p-m m-m"
        >
          GET STARTED
        </Link>
        {!authState.isLoggedIn && (
          <Link
            to="/signup"
            className="button-outline-primary text-lg button no-link p-m m-m"
          >
            SIGNUP
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
