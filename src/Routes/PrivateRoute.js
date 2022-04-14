import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthContext";

function PrivateRoute({ children }) {
  const { authState } = useAuth();
  const location = useLocation();

  return (
    <div>
      {authState.isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
}

export default PrivateRoute;
