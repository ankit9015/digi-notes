import React from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useNotes } from "../../context/NotesContext/NotesContext";

function Label() {
  const { notesList, uniqueLabels } = useNotes();

  return (
    <div className="flex-column flex-align-center gap-5">
      {uniqueLabels.length > 0 &&
        uniqueLabels.map((label) => (
          <div key={label} className="m-l">
            <h3 className="H3 m-s">{label.toUpperCase()}</h3>
            {notesList
              .filter((item) => item.tags.includes(label))
              .map((note) => (
                <div key={note._id} className="m-s">
                  <NoteCard variant="label" noteDetails={note} />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default Label;

// .map((note) => (
//   <div key={note._id}>
//     <NoteCard variant="label" noteDetails={note} />
//   </div>
// ))

// (
//   <div key={label}>
//     <h3 className="H3">{label.toUpperCase}</h3>
//     {notesList
//       .filter((item) => item.tags.includes(label))
//       .map((note) => (
//         <div key={note._id}>
//           <NoteCard variant="label" noteDetails={note} />
//         </div>
//       ))}
//   </div>
// )
