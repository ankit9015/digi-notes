import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="H1">Easy Notes App</h1>
      <Link to="/notes" className="button button-primary text-md m-l link-btn">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
