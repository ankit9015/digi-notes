import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import "./search-box.css";

function SearchBox(props) {
  console.log(props);

  return (
    <div className={`search-box text-md ${props.className}`}>
      <FaSearch />
      <input type="search" className="" />
      <FaFilter />
    </div>
  );
}

export default SearchBox;
