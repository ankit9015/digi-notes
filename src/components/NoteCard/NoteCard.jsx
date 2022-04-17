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
  FaTrashRestoreAlt,
} from "../../utils/icons/icons";

import "./note-card.css";
import "../Note/note.css";
import ModalNoteEditor from "../ModalNoteEditor/ModalNoteEditor";
import { useArchive } from "../../context/ArchiveContext/ArchiveContext";

function NoteCard(props) {
  const { variant, noteDetails } = props;
  console.log(variant);
  const { updateNotePinStatus, addNote, deleteNote, trash } = useNotes();
  const [modalDisplay, setModalDisplay] = useState(false);
  const { addToArchive, restoreFromArchive, deleteFromArchive } = useArchive();
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
        {variant !== "trash" && (
          <button
            className=" icon-button text-lg"
            onClick={() => updateNotePinStatus(noteDetails)}
          >
            {noteDetails.isPinned ? <BsPinFill /> : <BsPin />}
          </button>
        )}
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
          {variant !== "trash" ? (
            variant === "archive" ? (
              <>
                <button
                  className=" icon-button text-lg"
                  onClick={() => restoreFromArchive(noteDetails)}
                >
                  <BiArchiveOut />
                </button>
                <button
                  className=" icon-button text-lg"
                  onClick={() => {
                    deleteFromArchive(noteDetails);
                  }}
                >
                  <BiTrashAlt />
                </button>
              </>
            ) : (
              <>
                <button
                  className=" icon-button text-lg"
                  onClick={() => addToArchive(noteDetails)}
                >
                  <BiArchiveIn />
                </button>
                <button
                  className=" icon-button text-lg"
                  onClick={() => deleteNote(noteDetails)}
                >
                  <BiTrashAlt />
                </button>
              </>
            )
          ) : (
            <button
              className=" icon-button text-lg"
              onClick={() => {
                addNote(noteDetails);
                localStorage.setItem(
                  "TRASH",
                  JSON.stringify(
                    trash.filter((item) => item._id !== noteDetails._id)
                  )
                );
              }}
            >
              <FaTrashRestoreAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
