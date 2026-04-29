function NoteInput({ input, setInput, addNote }) {
  return (
    <div className="flex gap-3 mb-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addNote();
        }}
        placeholder="Add a new note..."
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={addNote}
        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
}

export default NoteInput;