import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";
import "./navigation.styles.scss";
const Navigation = () => {
  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser({ loggedIn: false });
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/home">
          <div className="logo">logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="todo">
            Todo-list
          </Link>
          <div className="nav-link btn" onClick={handleLogout}>
            Log Out
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
