import { useState } from "react";
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
import ModalNoteEditor from "../ModalNoteEditor/ModalNoteEditor";

function NoteCard({ noteDetails, className, id }) {
  const { notesList, updateNotePinStatus, notesDispatch, deleteNote } =
    useNotes();
  const [modalDisplay, setModalDisplay] = useState(false);
  return (
    <div className={`note-card text-md ${noteDetails.cardColor} ${className}`}>
      {modalDisplay && (
        <ModalNoteEditor
          currentNote={noteDetails}
          setModalDisplay={setModalDisplay}
        />
      )}
      <div className="note-card-header">
        <button
          className=" icon-button"
          onClick={() => setModalDisplay((prev) => !prev)}
        >
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
      <div>
        <p>{noteDetails.description}</p>
      </div>
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
          <button
            className=" icon-button"
            onClick={() => deleteNote(noteDetails)}
          >
            <BiTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
