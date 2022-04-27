import { useState } from "react";
import FilterModal from "../../components/FilterModal/FilterModal";
import ModalNoteEditor from "../../components/ModalNoteEditor/ModalNoteEditor";
import Note from "../../components/Note/Note";
import NoteCard from "../../components/NoteCard/NoteCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { useNotes } from "../../context/NotesContext/NotesContext";
import { defaultNotesState } from "../../context/NotesContext/notesReducer";
import "../pages.css";

function Notes() {
  const { notesList } = useNotes();
  const [showNotesEditor, setShowNotesEditor] = useState(false);
  const { notesDispatch } = useNotes();
  const pinnedNotes = notesList.filter((item) => item.isPinned);
  const notPinnedNotes = notesList.filter((item) => !item.isPinned);
  return (
    <div className="flex-column flex-align-center gap-5">
      <Note
        className={showNotesEditor ? "" : "display-none"}
        notesDisplayToggle={setShowNotesEditor}
      />
      {pinnedNotes.length > 0 && (
        <div className="pinned-notes flex-column">
          <h3 className="H3">Pinned Notes</h3>
          {pinnedNotes.map((item) => (
            <div key={item._id}>
              <NoteCard noteDetails={item} />
            </div>
          ))}
        </div>
      )}
      {notPinnedNotes.length > 0 && (
        <div className="user-notes flex-column">
          <h3 className="H3">Notes </h3>
          {notPinnedNotes.map((item) => (
            <div key={item._id}>
              <NoteCard noteDetails={item} />
            </div>
          ))}
        </div>
      )}

      <button
        className="create-note-button button button-primary text-md"
        onClick={() => {
          setShowNotesEditor((prev) => !prev);
          notesDispatch(defaultNotesState);
        }}
      >
        <span>Create Note</span>
      </button>
    </div>
  );
}

export default Notes;
