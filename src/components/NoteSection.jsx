function NoteSection({ notes }) {
  return <section id="notes">{notes.map((e) => e)}</section>;
}
export default NoteSection;
