import "../../App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";

function Header() {
  const specialPages = ["/", "/login", "/signup", "page-not-found"];
  const location = useLocation();

  return (
    <>
      {!specialPages.includes(location.pathname) && (
        <div className="flex-row" style={{ backgroundColor: "gray" }}>
          <span className="text-lg text-extrabold m-s">Easy Notes</span>
        </div>
      )}
    </>
  );
}

export default Header;
