import { useState } from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";
import Highlight from "react-highlighter";

import {
  BiArchiveIn,
  BiArchiveOut,
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdEdit,
  FaTrashRestoreAlt,
} from "../../utils/icons/icons";

import "./note-card.css";
import "../Note/note.css";
import ModalNoteEditor from "../ModalNoteEditor/ModalNoteEditor";
import { useArchive } from "../../context/ArchiveContext/ArchiveContext";
import Modal from "../Modal/Modal";

function NoteCard(props) {
  const { variant, noteDetails, highlights } = props;

  const { updateNotePinStatus, addNote, deleteNote, trash } = useNotes();
  const [modalDisplay, setModalDisplay] = useState(false);
  const { addToArchive, restoreFromArchive, deleteFromArchive } = useArchive();

  return (
    <div className={`note-card text-md ${noteDetails.cardColor}`}>
      {modalDisplay && (
        <Modal
          closeModal={() => {
            setModalDisplay(false);
          }}
        >
          <ModalNoteEditor
            currentNote={noteDetails}
            setModalDisplay={setModalDisplay}
          />
        </Modal>
      )}
      <div className="note-card-header">
        <span className="priority-info">Priority: {noteDetails.priority}</span>

        {!variant && (
          <>
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
          </>
        )}
      </div>
      <p className="text-md m-xs">
        <Highlight matchClass="highlighted-text" search={highlights ?? ""}>
          {noteDetails.title}
        </Highlight>
      </p>
      <p className="text-md">
        <Highlight matchClass="highlighted-text" search={highlights ?? ""}>
          {noteDetails.description}
        </Highlight>
      </p>

      <div className="tags-list m-xs ">
        {noteDetails.tags.map((tag) => (
          <span key={tag} className="note-tags text-md">
            <span className="">{tag}</span>
          </span>
        ))}
      </div>
      <div className="note-footer flex-row flex-wrap text-lg">
        <div className="note-date text-md">
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
