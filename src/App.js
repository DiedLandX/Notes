import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
function App() {
  return (
    <div className="App">
      <Header />
      <section id="notes">
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
      </section>
    </div>
  );
}

export default App;
