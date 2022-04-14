import { useState } from "react";

import { MdOutlineLabel } from "../../utils/icons/icons";
import "./label-button.css";

function LabelButton({ noteData, setNoteData }) {
  const [newLabel, setNewLabel] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(noteData);
  return (
    <span className="text-md label-button-container">
      <button
        className="text-lg icon-button"
        onClick={(e) => {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        }}
      >
        <MdOutlineLabel />
      </button>

      <div className={`label-dropdown ${showDropdown ? "" : "display-none"}`}>
        <div className="add-label flex-row gap-5">
          <input
            className="label-input"
            placeholder="tag"
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setNoteData({
                ...noteData,
                tags:
                  newLabel !== ""
                    ? [...noteData.tags, newLabel]
                    : [...noteData.tags],
              });
            }}
          >
            Add Label
          </button>
        </div>
      </div>
    </span>
  );
}

export default LabelButton;
