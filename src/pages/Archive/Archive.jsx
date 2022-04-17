import React from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useArchive } from "../../context/ArchiveContext/ArchiveContext";

function Archive() {
  const { archive, setArchive } = useArchive();
  const pinnedNotes = archive.filter((item) => item.isPinned);
  const notPinnedNotes = archive.filter((item) => !item.isPinned);
  return (
    <div className="flex-column flex-align-center gap-5">
      <SearchBox />

      {pinnedNotes.length > 0 && (
        <div className="pinned-notes flex-column">
          <h3 className="H3">Pinned Notes</h3>
          {pinnedNotes.map((item) => (
            <div key={item._id}>
              <NoteCard variant="archive" noteDetails={item} />
            </div>
          ))}
        </div>
      )}

      {notPinnedNotes.length > 0 && (
        <div className="user-notes flex-column">
          <h3 className="H3">Notes </h3>
          {notPinnedNotes.map((item) => (
            <div key={item._id}>
              <NoteCard variant="archive" noteDetails={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Archive;
