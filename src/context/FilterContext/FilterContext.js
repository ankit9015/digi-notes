import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
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
  const [filteredList, setFilteredList] = useState([]);
  const { notesList } = useNotes();
  const { archive } = useArchive();

  const listToFilter = [
    ...notesList.map((item) => ({ ...item, from: "notes" })),
    ...archive.map((item) => ({ ...item, from: "archive" })),
  ];

  useEffect(() => {
    setFilteredList(
      cumulateiveFilter(
        dateSort,
        filterLabels,
        filterPriorities,
        searchFilter,
        isDefault
      )(listToFilter, filterState)
    );
  }, [filterState]);

  return (
    <FilterContext.Provider
      value={{
        setFilteredList,
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
