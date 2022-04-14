import React from "react";
import Note from "../../components/Note/Note";
import SearchBox from "../../components/SearchBox/SearchBox";

function Notes() {
  return (
    <div className="flex-column flex-align-center">
      <SearchBox />

      <div className="flex-column m-l p-l">
        <div className="pinned-notes"></div>
        <div className="user-notes"></div>
        <Note />
      </div>
    </div>
  );
}

export default Notes;
