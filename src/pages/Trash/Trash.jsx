import React, { useEffect } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/NotesContext/NotesContext";

function Trash() {
  const { trash } = useNotes();

  useEffect(() => {
    document.title = "Trash";
  }, []);

  return (
    <div className="flex-column flex-align-center gap-5">
      {trash.length > 0 && (
        <>
          <h3 className="H3">Trash</h3>
          {trash.map((item) => (
            <div key={item._id}>
              <NoteCard variant="trash" noteDetails={item} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Trash;
