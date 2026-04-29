import NoteItem from "./NoteItem";

function NoteList({ notes, toggleNote, editNote, deleteNote }) {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No notes found
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          toggleNote={toggleNote}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;