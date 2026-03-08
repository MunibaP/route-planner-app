import { Navigate } from "react-router-dom";

function AccessControl({ children }) {
  const isAuthenticated = true; // temporary test

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default AccessControl;