import { useState } from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";

import {
  BiArchiveIn,
  BiArchiveOut,
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdClose,
  MdEdit,
} from "../../utils/icons/icons";

import "./note-card.css";
import "../Note/note.css";
import ModalNoteEditor from "../ModalNoteEditor/ModalNoteEditor";
import { useArchive } from "../../context/ArchiveContext/ArchiveContext";

function NoteCard(props) {
  const { variant, noteDetails } = props;
  const { notesList, updateNotePinStatus, notesDispatch, deleteNote } =
    useNotes();
  const [modalDisplay, setModalDisplay] = useState(false);
  const {
    archive,
    setArchive,
    addToArchive,
    restoreFromArchive,
    deleteFromArchive,
  } = useArchive();
  return (
    <div className={`note-card text-md ${noteDetails.cardColor}`}>
      {modalDisplay && (
        <ModalNoteEditor
          currentNote={noteDetails}
          setModalDisplay={setModalDisplay}
        />
      )}
      <div className="note-card-header">
        <button
          className=" icon-button text-lg"
          onClick={() => setModalDisplay((prev) => !prev)}
        >
          <MdEdit />
        </button>
        <button
          className=" icon-button text-lg"
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
          {variant === "archive" ? (
            <>
              <span
                className=" icon-button text-lg"
                onClick={() => restoreFromArchive(noteDetails)}
              >
                <BiArchiveOut />
              </span>
              <button
                className=" icon-button text-lg"
                onClick={() => deleteFromArchive(noteDetails)}
              >
                <BiTrashAlt />
              </button>
            </>
          ) : (
            <>
              <span
                className=" icon-button text-lg"
                onClick={() => addToArchive(noteDetails)}
              >
                <BiArchiveIn />
              </span>
              <button
                className=" icon-button text-lg"
                onClick={() => deleteNote(noteDetails)}
              >
                <BiTrashAlt />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
