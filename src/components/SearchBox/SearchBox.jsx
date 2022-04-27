import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { FaSearch, FaFilter } from "../../utils/icons/icons";
import "./search-box.css";

function SearchBox(props) {
  const { filterDispatch, setListToFilter, filteredList } = useFilter();
  const [searchState, setSearchState] = useState({
    query: "",
    getSearch: false,
  });

  useEffect(() => {
    if (searchState.getSearch) {
      filterDispatch({ type: "SEARCH", payload: searchState.query });
      setSearchState({ ...searchState, getSearch: false });
    }
  }, [searchState.getSearch]);

  return (
    <div className={`search-box text-md ${props.className}`}>
      <span
        className="icon-button"
        onClick={() => setSearchState({ ...searchState, getSearch: true })}
      >
        <FaSearch />
      </span>

      <input
        type="search"
        className="text-md"
        value={searchState.query}
        onChange={(e) =>
          setSearchState({ ...searchState, query: e.target.value })
        }
      />

      <span
        className="icon-button"
        onClick={() => {
          props.showModal((prev) => !prev);
        }}
      >
        <Link className="no-link " to="/filteredNotes">
          <FaFilter />
        </Link>
      </span>
    </div>
  );
}

export default SearchBox;
