import "../../App.css";
import { Routes, Route, useLocation } from "react-router-dom";

function Header() {
  const specialPages = ["/", "/login", "/signup", "page-not-found"];
  const currentPath = useLocation();

  return (
    <>
      {!specialPages.includes(currentPath.pathname) && (
        <div className="flex-row" style={{ backgroundColor: "gray" }}>
          <span className="text-lg text-extrabold m-s">Easy Notes</span>
        </div>
      )}
    </>
  );
}

export default Header;
