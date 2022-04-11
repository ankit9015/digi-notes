import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1 className="H1">Profile</h1>

      <p className="text-md">Login kiya kya?</p>
      <Link className="button button-primary text-md m-l" to="/login">
        Login
      </Link>

      <Link className="button button-primary text-md m-l" to="*">
        Broken Link
      </Link>
    </div>
  );
}

export default Profile;
