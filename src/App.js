import "./App.css";
import Header from "./components/Header";
import NoteSection from "./components/NoteSection";
import AddPopUp from "./components/AddPopUp";
import { useEffect, useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  function deleteNote(key) {
    setNotes((e) =>
      e.filter((elem) => {
        return elem.id != key;
      })
    );
  }
  function addNote(title, description, date) {
    if (title.length < 3) {
      alert("You need to give a title to your note!");
      return false;
    }
    setNotes([
      ...notes,
      {
        id: "",
        noteTitle: title,
        noteDescription: description,
        noteDate: date,
        deleteNoteFn: deleteNote,
      },
    ]);

    return true;
  }

  return (
    <div className="App">
      <Header />
      <NoteSection notes={notes}></NoteSection>
      <AddPopUp addNote={addNote}></AddPopUp>
    </div>
  );
}

export default App;
