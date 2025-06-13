// src/router/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
