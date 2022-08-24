import Note from "./Note";

function AddPopUp({ addNote }) {
  function hidePopUp() {
    document.getElementById("popup-bg").style.display = "none";
    document.body.style.overflow = "scroll";
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
          placeholder="Type here the title..."
        />

        <label htmlFor="add-date">What's the date?</label>
        <input id="add-date" type="date" className="note-field" />

        <label htmlFor="add-description">What's the description?</label>
        <textarea
          name=""
          id="add-description"
          cols="30"
          rows="10"
          className="note-field"
        ></textarea>
        <button
          onClick={() => {
            addNote(<Note></Note>);
            hidePopUp();
          }}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
export default AddPopUp;
