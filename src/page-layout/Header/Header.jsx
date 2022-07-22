import "../../App.css";
import { useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { useFilter } from "../../context/FilterContext/FilterContext";
import {
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdSearch,
} from "../../utils/icons/icons";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

function Header(props) {
  const { setShowNavbar } = props;
  const { setTheme, isDarkTheme } = useTheme();
  const specialPages = ["/login", "/signup", "page-not-found"];
  const location = useLocation();
  const { authState, logOutHandler } = useAuth();
  const { setShowFilter } = useFilter();
  const [showSearchbox, setShowSearchbox] = useState(false);

  return (
    <>
      {!specialPages.includes(location.pathname) && (
        <div
          className={`flex-row global-header flex-align-center  ${
            isDarkTheme ? "dark-theme" : ""
          }`}
        >
          {authState.isLoggedIn && location.pathname !== "/" && (
            <span
              className="icon-button text-xl menu-button"
              onClick={() => setShowNavbar((prev) => !prev)}
            >
              <MdMenu />
            </span>
          )}
          <span className="text-xl text-extrabold m-s app-name">Digi-Note</span>
          {authState.isLoggedIn && location.pathname !== "/" && (
            <>
              <SearchBox
                showModal={setShowFilter}
                showSearchbox={showSearchbox}
                setShowSearchbox={setShowSearchbox}
              />

              <span
                className="search-show-button icon-button text-xl"
                onClick={() => setShowSearchbox((prev) => !prev)}
              >
                <MdSearch />
              </span>
              <button
                className="button button-primary logout-button"
                onClick={() => logOutHandler()}
              >
                <span>Logout</span>
              </button>
            </>
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
