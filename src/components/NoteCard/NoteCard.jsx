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
        <span className="priority-info">Priority: {noteDetails.priority}</span>
        <button
          className=" icon-button text-lg"
          onClick={() => setModalDisplay((prev) => !prev)}
        >
          <MdEdit />
        </button>

        {!variant && (
          <button
            className=" icon-button text-lg"
            onClick={() => updateNotePinStatus(noteDetails)}
          >
            {noteDetails.isPinned ? <BsPinFill /> : <BsPin />}
          </button>
        )}
      </div>
      <p className="text-lg m-xs">{noteDetails.title}</p>
      <p className="text-lg">{noteDetails.description}</p>

      <div className="tags-list m-xs">
        {noteDetails.tags.map((tag) => (
          <span key={tag} className="note-tags text-md">
            {tag}
            <MdClose aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="note-card-footer flex-row">
        <div className="note-date">
          Created at: {new Date(noteDetails.createdAt).toLocaleDateString()}
        </div>
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
