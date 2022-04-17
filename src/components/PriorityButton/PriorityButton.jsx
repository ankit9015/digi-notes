import React from "react";
import { useNotes } from "../../context/NotesContext/NotesContext";
import { FaExclamation } from "../../utils/icons/icons";

function PriorityButton(props) {
  const { setModal, modalState } = props;
  const { notesState, notesDispatch, uniqueLabels } = useNotes();
  return (
    <span>
      <select
        value={notesState.priority}
        onChange={(e) =>
          modalState
            ? setModal({ ...modalState, priority: e.target.value })
            : notesDispatch({
                type: "UPDATE-PRIORITY",
                payload: e.target.value,
              })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </span>
  );
}

export default PriorityButton;
