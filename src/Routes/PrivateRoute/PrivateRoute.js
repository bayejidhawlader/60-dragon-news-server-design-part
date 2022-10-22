import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
/**
 1. only allwed authinticated  user to visite the route
 2.
 3. Redirect user to the route they wanted to go before login
 */

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="border" variant="primary"></Spinner>;
  }

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace>
        Login
      </Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
