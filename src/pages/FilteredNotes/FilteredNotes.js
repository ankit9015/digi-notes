import { useState } from "react";
import FilterModal from "../../components/FilterModal/FilterModal";
import Note from "../../components/Note/Note";
import NoteCard from "../../components/NoteCard/NoteCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useNotes } from "../../context/NotesContext/NotesContext";
import "../pages.css";

function FilteredNotes() {
  const { filterState, filteredList, showFilter, setShowFilter } = useFilter();
  const filteredNotes = filteredList.filter((item) => item.from === "notes");
  const filteredArchive = filteredList.filter(
    (item) => item.from === "archive"
  );
  return (
    <div className="flex-column flex-align-center gap-5">
      {showFilter && <FilterModal showModal={setShowFilter} />}
      <h2 className="H2 m-m">Filter Result: {filteredList.length}</h2>

      {filteredNotes.length > 0 && (
        <div className="pinned-notes flex-column">
          <h3 className="H3">Notes</h3>
          {filteredNotes.map((item) => (
            <div key={item._id}>
              <NoteCard
                noteDetails={item}
                highlights={filterState.searchQuery}
              />
            </div>
          ))}
        </div>
      )}
      {filteredArchive.length > 0 && (
        <div className="user-notes flex-column">
          <h3 className="H3">Archive</h3>
          {filteredArchive.map((item) => (
            <div key={item._id}>
              <NoteCard variant="archive" noteDetails={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilteredNotes;
