import { useState } from "react";
import {
  BiArchiveIn,
  BiTrashAlt,
  BsPin,
  BsPinFill,
  MdClose,
} from "../../utils/icons/icons";
import ColorButton from "../ColorButton/ColorButton";
import LabelButton from "../LabelButton/LabelButton";
import "./note.css";

function Note() {
  const defaultState = {
    title: "",
    body: "",
    isPinned: false,
    tags: ["home", "fruits"],
    cardColor: "",
    createdAt: new Date().toLocaleDateString(),
  };

  const [noteData, setNoteData] = useState(defaultState);
  console.log(noteData);

  const removetag = (_item) => {
    setNoteData({
      ...noteData,
      tags: noteData.tags.filter((item) => item !== _item),
    });
  };

  return (
    <div className={`note ${noteData.cardColor}`}>
      <div className="flex-column">
        <button
          className="note-pin text-lg icon-button"
          onClick={() =>
            setNoteData({ ...noteData, isPinned: !noteData.isPinned })
          }
        >
          {noteData.isPinned ? <BsPinFill /> : <BsPin />}
        </button>

        <div className="note-content flex-column">
          <textarea
            className="note-title p-xs"
            type="text"
            placeholder="Title of the note"
            value={noteData.title}
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
            rows="1"
          />
          <textarea
            className="note-body p-xs"
            type="text"
            placeholder="Body of the note"
            value={noteData.body}
            onChange={(e) =>
              setNoteData({ ...noteData, body: e.target.value }, 5000)
            }
          />
        </div>
        <div className="tags-list m-xs">
          {noteData.tags.map((item, index) => (
            <span key={index} className="note-tags text-md">
              {item}
              <button className="icon-button" onClick={() => removetag(item)}>
                <MdClose aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="note-footer flex-row text-lg">
        <div className="note-date">Created at: {noteData.createdAt}</div>
        <div className="note-buttons">
          <ColorButton noteData={noteData} setNoteData={setNoteData} />
          <BiArchiveIn />
          <BiTrashAlt />
          <LabelButton noteData={noteData} setNoteData={setNoteData} />
        </div>
      </div>
    </div>
  );
}

export default Note;
