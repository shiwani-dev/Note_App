import NoteItem from "./NoteItem";

function NoteList({
  notes,
  toggleNote,
  editNote,
  deleteNote,
  selectedNotes,
  toggleSelect,
  loading
}) {
  if (!loading&&notes?.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 p-10 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
          🕊️
        </div>

        <h3 className="text-lg font-bold text-slate-800">
          No notes found
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          Add a new note or switch your filter to see more notes here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notes.map((note, index) => (
        <div
          key={note._id}
          className="animate-note-in"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <NoteItem
            note={note}
            toggleNote={toggleNote}
            editNote={editNote}
            deleteNote={deleteNote}
            selectedNotes={selectedNotes}
            toggleSelect={toggleSelect}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;