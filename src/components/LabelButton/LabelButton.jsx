import { useState } from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";

import { MdOutlineLabel } from "../../utils/icons/icons";
import "./label-button.css";

function LabelButton({ setModal, modalState }) {
  const [newLabel, setNewLabel] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { notesState, notesDispatch, noteLabels, setNoteLabel } = useNotes();
  // const isInTags = (label) => notesState.tags.includes(label);

  return (
    <span className="text-md dropdown-container">
      <button
        className="text-lg icon-button"
        onClick={(e) => {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        }}
      >
        <MdOutlineLabel />
      </button>

      <div className={`dropdown ${showDropdown ? "" : "display-none"}`}>
        <div className="add-label text-md  flex-row gap-5">
          <input
            className="label-input text-md"
            placeholder="tag"
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <button
            className="text-md"
            onClick={(e) => {
              e.preventDefault();
              modalState
                ? setModal({
                    ...modalState,
                    tags: [...modalState.tags, newLabel],
                  })
                : notesDispatch({ type: "UPDATE-TAGS", payload: newLabel });
              setNewLabel("");
            }}
          >
            Add Label
          </button>
        </div>
        <ul>
          {noteLabels.map((label) => (
            <label key={label}>
              <input
                type="checkbox"
                name={label}
                // checked={isInTags(label)}
                // onClick={labelCheckToggle(label)}
              />
              {label}
            </label>
          ))}
        </ul>
      </div>
    </span>
  );
}

export default LabelButton;
