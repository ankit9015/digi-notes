import { useState } from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";
import { MdOutlineColorLens } from "../../utils/icons/icons";
import "./color-button.css";

function ColorButton(props) {
  const { setModal, modalState } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const cardColors = ["redCard", "blueCard", "orangeCard", "greenCard"];
  const { notesDispatch } = useNotes();

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
                modalState
                  ? setModal({ ...modalState, cardColor: color })
                  : notesDispatch({ type: "UPDATE-COLOR", payload: color });
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
