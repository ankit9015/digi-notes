import { useState } from "react";
import { MdOutlineColorLens } from "../../utils/icons/icons";
import "./color-button.css";

function ColorButton({ noteData, setNoteData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const cardColors = ["redCard", "blueCard", "orangeCard", "greenCard"];

  return (
    <span className="color-picker dropdown-container">
      <button
        className="text-lg icon-button"
        onClick={(e) => {
          e.preventDefault();
          setShowDropdown(!showDropdown);
        }}
      >
        <MdOutlineColorLens className="text-lg" />
      </button>
      <div className={`dropdown  ${showDropdown ? "" : "display-none"}`}>
        <div className="color-dropdown">
          {cardColors.map((color) => (
            <span
              key={color}
              onClick={() => {
                setNoteData({ ...noteData, cardColor: color });
              }}
            >
              <div className={`color-circle ${color}`}></div>
            </span>
          ))}
        </div>
      </div>
    </span>
  );
}

export default ColorButton;
