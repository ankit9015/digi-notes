import React from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";

import {
  BiArchiveIn,
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdClose,
  MdOutlineSave,
  MdEdit,
} from "../../utils/icons/icons";

import "./note-card.css";
import "../Note/note.css";

function NoteCard({ noteDetails, className }) {
  const { updateNotePinStatus, notesDispatch, deleteNote } = useNotes();
  return (
    <div className={`note-card text-md ${noteDetails.cardColor} ${className}`}>
      <div className="note-card-header">
        <button className=" icon-button" onClick={() => {}}>
          <MdEdit />
        </button>
        <button
          className=" icon-button"
          onClick={() => updateNotePinStatus(noteDetails)}
        >
          {noteDetails.isPinned ? <BsPinFill /> : <BsPin />}
        </button>
      </div>
      <h1>{noteDetails.title}</h1>
      <p>{noteDetails.descriptions}</p>
      <div className="tags-list m-xs">
        {noteDetails.tags.map((tag) => (
          <span key={tag} className="note-tags text-md">
            {tag}
            <MdClose aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="note-card-footer flex-row">
        <div className="note-date">Created at: {noteDetails.createdAt}</div>
        <div className="note-buttons">
          <BiArchiveIn />
          <button className=" icon-button" onClick={() => {}}>
            <BiTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
