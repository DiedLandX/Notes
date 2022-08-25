import { useState } from "react";

function AddPopUp({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toDateString());

  function hidePopUp() {
    document.getElementById("popup-bg").style.display = "none";
    document.body.style.overflow = "auto";
  }
  return (
    <div
      id="popup-bg"
      onClick={() => {
        hidePopUp();
      }}
    >
      <div id="popup-container" onClick={(e) => e.stopPropagation()}>
        <label htmlFor="add-title">What's the title?</label>
        <input
          id="add-title"
          type="text"
          className="note-field"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Type here the title..."
        />
        <label htmlFor="add-date">What's the date?</label>
        <input
          id="add-date"
          type="date"
          className="note-field"
          onChange={(e) => setDate(e.target.value)}
        />
        ,<label htmlFor="add-description">What's the description?</label>
        <textarea
          name=""
          id="add-description"
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
          className="note-field"
        ></textarea>
        <button
          onClick={() => {
            if (addNote(title, description, date)) hidePopUp();
          }}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
export default AddPopUp;
