import Note from "./Note";

function NoteSection({ notes }) {
  return (
    <section id="notes">
      {notes.map((e, i) => {
        e.id = i + 1;

        return (
          <Note
            key={i + 1}
            listId={e.id}
            deleteNoteFn={e.deleteNoteFn}
            noteTitle={e.noteTitle}
            noteDate={e.noteDate}
            noteDescription={e.noteDescription}
          ></Note>
        );
      })}
    </section>
  );
}
export default NoteSection;
