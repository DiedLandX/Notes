import delete_icon from "../deleteIcon.svg";
import important_icon from "../importantIcon.svg";
import important_empty_icon from "../star.svg";
function Note() {
  return (
    <div className="note-container">
      <div className="note-header">
        <h3>Title of the note</h3>
        <p>2022.08.21</p>
      </div>
      <div className="note-content">
        <p>Description:This is the decription of the note</p>
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
        <img className="delete-button" src={delete_icon} alt="" />
      </div>
    </div>
  );
}
export default Note;
