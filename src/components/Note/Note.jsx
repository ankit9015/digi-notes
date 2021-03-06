import { useNotes } from "../../context/NotesContext/NotesContext";
import {
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdClose,
  MdOutlineSave,
} from "../../utils/icons/icons";
import ColorButton from "../ColorButton/ColorButton";
import LabelButton from "../LabelButton/LabelButton";
import PriorityButton from "../PriorityButton/PriorityButton";
import "./note.css";

function Note({ className, notesDisplayToggle }) {
  const { notesState, notesDispatch, addNote } = useNotes();

  return (
    <div className={`note ${notesState.cardColor} ${className}`}>
      <div className="flex-column">
        <div className="flex-row note-top-icons">
          <button
            className="text-xl icon-button"
            onClick={() => {
              addNote(notesState);
              notesDisplayToggle((prev) => !prev);
              notesDispatch({ type: "RESET-NOTE" });
            }}
          >
            <MdOutlineSave />
          </button>
          <button
            className="text-lg icon-button"
            onClick={() => notesDispatch({ type: "UPDATE-PIN" })}
          >
            {notesState.isPinned ? <BsPinFill /> : <BsPin />}
          </button>
        </div>

        <div className="note-content flex-column">
          <textarea
            className="note-title text-lg p-xs"
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
            className="note-body text-lg p-xs"
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
      <div className="note-footer flex-row flex-wrap text-lg">
        <div className="note-date">
          Created at: {new Date(notesState.createdAt).toLocaleDateString()}
        </div>

        <div className="note-buttons flex-row gap-5">
          <PriorityButton />
          <ColorButton />
          <LabelButton />
          <span
            className="icon-button"
            onClick={() => notesDispatch({ type: "RESET-NOTE" })}
          >
            <BiTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Note;
