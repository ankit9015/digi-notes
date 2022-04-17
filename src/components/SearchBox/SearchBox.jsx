import React from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { FaSearch, FaFilter } from "../../utils/icons/icons";
import "./search-box.css";

function SearchBox(props) {
  const { filterDispatch, setListToFilter, filteredList } = useFilter();

  return (
    <div className={`search-box text-md ${props.className}`}>
      <FaSearch />
      <input type="search" className="" />
      <span
        onClick={() => {
          props.showModal((prev) => !prev);
        }}
      >
        <FaFilter />
      </span>
    </div>
  );
}

export default SearchBox;
