import { createContext, useContext, useState, useReducer } from "react";
import { useNotes } from "../NotesContext/NotesContext";
import {
  cumulateiveFilter,
  dateSort,
  filterLabels,
  filterPriorities,
} from "./filterFunctions";
import { defaultFilterState, filterReducer } from "./filterReducer";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    defaultFilterState
  );
  const { notesList } = useNotes();

  const filteredList = cumulateiveFilter(
    dateSort,
    filterLabels,
    filterPriorities
  )(notesList, filterState);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredList }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
