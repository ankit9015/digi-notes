import { useArchive } from "../../context/ArchiveContext/ArchiveContext";
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
import "./note.css";

function Note({ className, notesDisplayToggle }) {
  const { notesState, notesDispatch, addNote } = useNotes();
  const { setArchive } = useArchive();

  return (
    <div className={`note ${notesState.cardColor} ${className}`}>
      <div className="flex-column">
        <div className="flex-row note-top-icons">
          <button
            className="text-lg icon-button"
            onClick={() => {
              addNote(notesState);
              notesDisplayToggle((prev) => !prev);
              notesDispatch({ type: "RESET-NOTE", payload: {} });
            }}
          >
            <MdOutlineSave />
          </button>
          <button
            className="text-lg icon-button"
            onClick={() => notesDispatch({ type: "UPDATE-PIN", payload: {} })}
          >
            {notesState.isPinned ? <BsPinFill /> : <BsPin />}
          </button>
        </div>

        <div className="note-content flex-column">
          <textarea
            className="note-title p-xs"
            type="text"
            placeholder="Title of the note"
            value={notesState.title}
            onChange={(e) =>
              notesDispatch({
                type: "UPDATE-TITLE",
                payload: e.target.value,
              })
            }
            rows="1"
          />
          <textarea
            className="note-body p-xs"
            type="text"
            placeholder="Body of the note"
            value={notesState.description}
            onChange={(e) =>
              notesDispatch({
                type: "UPDATE-DESCRIPTION",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="tags-list m-xs">
          {notesState.tags.map((tag) => (
            <span key={tag} className="note-tags text-md">
              {tag}
              <button
                className="icon-button"
                onClick={() =>
                  notesDispatch({ type: "REMOVE-TAG", payload: tag })
                }
              >
                <MdClose aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="note-footer flex-row text-lg">
        <div className="note-date">Created at: {notesState.createdAt}</div>
        <div className="note-buttons">
          <ColorButton />
          <BiArchiveIn />
          <span
            className="icon-button"
            onClick={() => notesDispatch({ type: "RESET-NOTE", payload: {} })}
          >
            <BiTrashAlt />
          </span>

          <LabelButton />
        </div>
      </div>
    </div>
  );
}

export default Note;
