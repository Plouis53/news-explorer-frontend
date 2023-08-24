import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    console.log("signup");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
