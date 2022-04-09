import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { pathname, search } = useLocation();
  const { user } = useContext(AuthContext);

  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="login" />;
};

export default PrivateRoute;
