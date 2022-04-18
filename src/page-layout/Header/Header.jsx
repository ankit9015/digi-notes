import "../../App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineLightMode,
} from "../../utils/icons/icons";

function Header({ setTheme, isDarkTheme }) {
  const specialPages = ["/login", "/signup", "page-not-found"];
  const location = useLocation();
  const { authState, logOutHandler } = useAuth();

  return (
    <>
      {!specialPages.includes(location.pathname) && (
        <div className="flex-row global-header flex-align-center">
          <span className="text-xl text-extrabold m-s app-name">Digi-Note</span>

          {authState.isLoggedIn && (
            <button
              className="button button-primary logout-button"
              onClick={() => logOutHandler()}
            >
              <span>Logout</span>
            </button>
          )}
          <span
            className="icon-button text-xl m-m"
            onClick={() => setTheme((prev) => !prev)}
          >
            {isDarkTheme ? (
              <MdLightMode style={{ color: " var(--white)" }} />
            ) : (
              <MdDarkMode />
            )}
          </span>
        </div>
      )}
    </>
  );
}

export default Header;
