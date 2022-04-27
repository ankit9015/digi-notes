import { useState } from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";
import {
  BiArchiveIn,
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdClose,
  MdOutlineSave,
} from "../../utils/icons/icons";
import ColorButton from "../ColorButton/ColorButton";
import LabelButton from "../LabelButton/LabelButton";
import PriorityButton from "../PriorityButton/PriorityButton";
import "./modal-note.css";
import "../Note/note.css";

function ModalNoteEditor({ currentNote, setModalDisplay }) {
  const { updateNote, defaultNotesState } = useNotes();

  const [updatedNote, setUpdatedNote] = useState(currentNote);
  console.log(updatedNote);

  return (
    <div className={`modal-note-editor note ${updatedNote.cardColor}`}>
      <div className="flex-column">
        <div className="flex-row note-top-icons">
          <button
            className="text-lg icon-button"
            onClick={() => {
              updateNote(updatedNote);
              setModalDisplay((prev) => !prev);
            }}
          >
            <MdOutlineSave />
          </button>
          <button
            className="text-lg icon-button"
            onClick={() =>
              setUpdatedNote({
                ...updatedNote,
                isPinned: !updatedNote.isPinned,
              })
            }
          >
            {updatedNote.isPinned ? <BsPinFill /> : <BsPin />}
          </button>
        </div>

        <div className="note-content flex-column">
          <textarea
            className="note-title p-xs"
            type="text"
            placeholder="Title of the note"
            value={updatedNote.title}
            onChange={(e) =>
              setUpdatedNote({ ...updatedNote, title: e.target.value })
            }
            rows="1"
          />
          <textarea
            className="note-body p-xs"
            type="text"
            placeholder="Body of the note"
            value={updatedNote.description}
            onChange={(e) =>
              setUpdatedNote({
                ...updatedNote,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="tags-list m-xs">
          {updatedNote.tags !== [] &&
            updatedNote.tags.map((tag) => (
              <span key={tag} className="note-tags text-md">
                {tag}
                <button
                  className="icon-button"
                  onClick={() =>
                    setUpdatedNote({
                      ...updatedNote,
                      tags: updatedNote.tags.filter((item) => item !== tag),
                    })
                  }
                >
                  <MdClose aria-hidden="true" />
                </button>
              </span>
            ))}
        </div>
      </div>
      <div className="note-footer flex-row flex-wrap text-lg">
        <div className="note-date">
          Created at: {new Date(updatedNote.createdAt).toLocaleDateString()}
        </div>
        <div className="note-buttons flex-row flex-wrap">
          <PriorityButton setModal={setUpdatedNote} modalState={updatedNote} />
          <ColorButton setModal={setUpdatedNote} modalState={updatedNote} />
          <span
            className="icon-button"
            onClick={() =>
              setUpdatedNote({ ...defaultNotesState, _id: updatedNote._id })
            }
          >
            <BiTrashAlt />
          </span>
          <LabelButton setModal={setUpdatedNote} modalState={updatedNote} />
        </div>
      </div>
    </div>
  );
}

export default ModalNoteEditor;
