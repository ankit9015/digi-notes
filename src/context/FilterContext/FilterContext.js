import { createContext, useContext, useState, useReducer } from "react";
import { useNotes } from "../NotesContext/NotesContext";
import {
  isDefault,
  searchFilter,
  cumulateiveFilter,
  dateSort,
  filterLabels,
  filterPriorities,
} from "./filterFunctions";
import { defaultFilterState, filterReducer } from "./filterReducer";
import { useArchive } from "../ArchiveContext/ArchiveContext";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    defaultFilterState
  );
  const [showFilter, setShowFilter] = useState(false);
  const { notesList } = useNotes();
  const { archive } = useArchive();

  const listToFilter = [
    ...notesList.map((item) => ({ ...item, from: "notes" })),
    ...archive.map((item) => ({ ...item, from: "archive" })),
  ];

  let filteredList = cumulateiveFilter(
    dateSort,
    filterLabels,
    filterPriorities,
    searchFilter,
    isDefault
  )(listToFilter, filterState);

  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
        filteredList,
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
