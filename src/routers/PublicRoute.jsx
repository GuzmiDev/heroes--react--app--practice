import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return !user.logged ? children : <Navigate to="/" />;
};

export default PublicRoute;
