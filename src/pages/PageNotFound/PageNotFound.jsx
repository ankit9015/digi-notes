import React, { useEffect } from "react";
import "../pages.css";

function PageNotFound() {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div className="page-not-found">
      <p className="text-center text-xl font-bold">404 - Page Not Found</p>
    </div>
  );
}

export default PageNotFound;
