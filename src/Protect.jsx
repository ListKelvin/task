import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./App";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const Protect = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default Protect;
