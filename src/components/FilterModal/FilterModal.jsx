import React from "react";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useNotes } from "../../context/NotesContext/NotesContext";
import { MdClose } from "../../utils/icons/icons";
import "./filter-modal.css";

function FilterModal({ showModal }) {
  const { setFilteredList, filterState, filterDispatch } = useFilter();
  const { uniqueLabels } = useNotes();
  return (
    <div className="filter-modal flex-column">
      <button
        className="icon-button cross-button"
        onClick={() => showModal((prev) => !prev)}
      >
        <MdClose aria-hidden="true" />
      </button>
      <h3 className="H3 text-center text-bold">Filter</h3>
      <button
        className="button button-outline-secondary clear-button text-md"
        onClick={() => {
          filterDispatch({ type: "CLEAR-ALL" });
          setFilteredList([]);
        }}
      >
        Clear All
      </button>
      <div className="text-md m-s">
        <p className="text-md">Sort by:</p>
        <div className="flex-row flex-wrap">
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
      </div>
      <div className="text-md m-s">
        <p className="text-md">Filter by Priority:</p>
        <div className="flex-row flex-wrap">
          <label className="m-xs">
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
          <label className="m-xs">
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
          <label className="m-xs">
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
      </div>
      <div className="text-md m-s">
        <p className="text-md">Filter Labels:</p>
        <div className="flex-row flex-wrap">
          {uniqueLabels.map((label) => (
            <label key={label} className="m-xs">
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
    </div>
  );
}

export default FilterModal;
