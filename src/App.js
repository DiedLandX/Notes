import "./App.css";
import Header from "./components/Header";
import NoteSection from "./components/NoteSection";
import AddPopUp from "./components/AddPopUp";
import { useEffect, useState } from "react";

function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...Notes, note]);
  }
  return (
    <div className="App">
      <Header />
      <NoteSection notes={Notes}></NoteSection>
      <AddPopUp addNote={addNote}></AddPopUp>
    </div>
  );
}

export default App;
