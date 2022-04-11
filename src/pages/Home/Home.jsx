import React from "react";
import Note from "../../components/Note/Note";
import SearchBox from "../../components/SearchBox/SearchBox";

function Home() {
  return (
    <div className="flex-column flex-align-center">
      <SearchBox />

      <div className="flex-column m-l p-l">
        <div className="pinned-notes"></div>
        <Note />
      </div>
    </div>
  );
}

export default Home;
