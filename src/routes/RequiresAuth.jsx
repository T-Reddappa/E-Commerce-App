import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;
