import React from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useNotes } from "../../context/NotesContext/NotesContext";
import "./filter-modal.css";

function FilterModal() {
  const { filterState, filterDispatch } = useFilter();
  const { uniqueLabels } = useNotes();
  return (
    <div className="filter-modal flex-column">
      <h3 className="H3 text-center text-bold">Filter</h3>
      <div
        className="button button-outline-secondary clear-button text-md"
        onClick={() => filterDispatch({ type: "CLEAR-ALL" })}
      >
        Clear All
      </div>
      <div className="text-md m-s">
        <p className="text-md">Sort by:</p>
        <label className="m-xs">
          <input
            type="radio"
            name="sort"
            value="oldest-first"
            checked={filterState.sort === "oldest-first"}
            onChange={() => filterDispatch({ type: "OLDEST-FIRST" })}
          />
          Oldest First
        </label>
        <label className="m-xs">
          <input
            type="radio"
            name="sort"
            value="newest-first"
            checked={filterState.sort === "newest-first"}
            onChange={() => filterDispatch({ type: "NEWEST-FIRST" })}
          />
          Newest First
        </label>
      </div>
      <div className="text-md m-s">
        <p className="text-md">Filter by Priority:</p>
        <label>
          <input
            type="checkbox"
            name="priorities"
            value={"Low"}
            checked={filterState.priorities.includes("Low")}
            onChange={() =>
              filterDispatch({ type: "FILTER-PRIORITY", payload: "Low" })
            }
          />
          Low
        </label>
        <label>
          <input
            type="checkbox"
            name="priorities"
            value={"Medium"}
            checked={filterState.priorities.includes("Medium")}
            onChange={() =>
              filterDispatch({ type: "FILTER-PRIORITY", payload: "Medium" })
            }
          />
          Medium
        </label>
        <label>
          <input
            type="checkbox"
            name="priorities"
            value={"High"}
            checked={filterState.priorities.includes("High")}
            onChange={() =>
              filterDispatch({ type: "FILTER-PRIORITY", payload: "High" })
            }
          />
          High
        </label>
      </div>
      <div className="text-md m-s">
        <p className="text-md">Filter Labels:</p>
        {uniqueLabels.map((label) => (
          <label key={label}>
            <input
              type="checkbox"
              name={label}
              value={label}
              checked={filterState.labels.includes(label)}
              onChange={() =>
                filterDispatch({ type: "FILTER-LABEL", payload: label })
              }
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterModal;
