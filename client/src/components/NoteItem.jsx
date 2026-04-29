function NoteItem({ note, toggleNote, editNote, deleteNote }) {
  return (
    <div
      className={`border rounded-xl p-4 flex justify-between items-center ${
        note.importance
          ? "bg-green-50 border-green-300"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div>
        <p className="text-gray-800 font-medium">{note.text}</p>

        <span
          className={`text-xs font-semibold ${
            note.importance ? "text-green-700" : "text-gray-500"
          }`}
        >
          {note.importance ? "Important" : "Not Important"}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => toggleNote(note.id)}
          className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 text-sm hover:bg-yellow-200"
        >
          Priority
        </button>

        <button
          onClick={() => editNote(note.id, prompt("Edit note"))}
          className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm hover:bg-blue-200"
        >
          Edit
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-sm hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;