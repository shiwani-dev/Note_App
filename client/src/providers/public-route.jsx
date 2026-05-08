import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/notes" replace /> : children;
}

export default PublicRoute