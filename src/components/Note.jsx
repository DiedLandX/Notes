import delete_icon from "../deleteIcon.svg";
import important_icon from "../importantIcon.svg";
import important_empty_icon from "../star.svg";
function Note({ noteTitle, noteDescription, noteDate, deleteNoteFn, listId }) {
  return (
    <div className="note-container">
      <div className="note-header">
        <h3>{noteTitle}</h3>
        <p>{noteDate}</p>
      </div>
      <div className="note-content">
        <p>{noteDescription}</p>
        <div className="buttons-container">
          <div className="stars">
            <img
              width={18}
              height={18}
              className="important-empty"
              src={important_empty_icon}
              alt=""
            />{" "}
            <img
              width={18}
              height={18}
              className="important-filled"
              src={important_icon}
              alt=""
            />
          </div>
          <img
            className="delete-button"
            src={delete_icon}
            alt=""
            onClick={() => {
              deleteNoteFn(listId);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Note;
