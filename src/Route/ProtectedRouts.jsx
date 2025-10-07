import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated] = useState(true); // Currently hardcoded for testing
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet /> // Renders the nested route(s) if authenticated
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace /> // Redirects to /signin if not authenticated
  );
};

export default ProtectedRoute;
