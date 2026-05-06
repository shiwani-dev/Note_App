function NoteInput({ input, setInput, addNote }) {
  return (
    <div className="mb-5 rounded-2xl border border-blue-100 bg-blue-50/40 p-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            ✍️
          </span>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addNote();
            }}
            placeholder="Write a new note..."
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-11 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          onClick={addNote}
          className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:scale-95"
        >
          Add Note +
        </button>
      </div>

      <p className="mt-2 ml-3 text-xs text-white">
         Press Enter to quickly save your note.
      </p>
    </div>
  );
}

export default NoteInput;