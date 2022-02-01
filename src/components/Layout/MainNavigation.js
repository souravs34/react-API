import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import "./NavbarNavigation.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional : redirect user
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Ｓ♢ＵＲΛＶ</div>
      </Link>
      <nav
      // className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/allcocktails">All Cocktails</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/changepassword">Change Password</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
