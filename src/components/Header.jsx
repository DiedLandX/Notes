import note from "../note.png";
import plusSign from "../add.png";
function Header() {
  return (
    <nav>
      <img src={note} alt="" />
      <p id="main-title">Notes for EveryOne!</p>
      <a id="add-note" href="#">
        <img
          src={plusSign}
          alt=""
          style={{ objectFit: "cover", width: 16, height: 16 }}
        />
      </a>
      <a href="#">Contact</a>
      <a href="#">Find a Note</a>
    </nav>
  );
}
export default Header;
