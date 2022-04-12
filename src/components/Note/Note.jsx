import { useState } from "react";
import {
  MdOutlineColorLens,
  BiArchiveIn,
  BiTrashAlt,
  BsPin,
  MdOutlineLabel,
} from "../../utils/icons/icons";
import "./note.css";

function Note() {
  return (
    <div className="note flex-column">
      <BsPin className="note-pin text-lg" />
      <div className="note-content flex-column">
        <input
          className="note-title p-xs"
          type="text"
          placeholder="Title of the note"
        />
        <textarea
          className="note-body p-xs"
          type="text"
          rows={5}
          placeholder="Body of the note"
        />
      </div>
      <div className="note-footer flex-row text-lg">
        <div className="note-date">Created on 2/3/22</div>
        <div className="note-buttons">
          <MdOutlineColorLens />
          <BiArchiveIn />
          <BiTrashAlt />
          <MdOutlineLabel />
        </div>
      </div>
    </div>
  );
}

export default Note;
