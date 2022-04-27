import React from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useArchive } from "../../context/ArchiveContext/ArchiveContext";

function Archive() {
  const { archive, setArchive } = useArchive();
  return (
    <div className="flex-column flex-align-center gap-5">
      {archive.length > 0 && (
        <div className="flex-column">
          <h3 className="H3">Archive</h3>
          {archive.map((item) => (
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
