import NoteInput from "./NoteInput";
import Filter from "../extra/Filter";
import NoteList from "./NoteList";
import LoadingSkeleton from "../extra/LoadingSkeleton";

function NotesUI({
  filteredNotes,
  selectedNotes,
  loading,
  error,
  input,
  setInput,
  addNote,
  filter,
  handleFilter,
  deleteSelectedNotes,
  toggleNote,
  editNote,
  deleteNote,
  toggleSelect,
  isPending,
}) {
  return (
    <section className="rounded-3xl border border-purple-100 p-5 shadow-xl backdrop-blur">

      {error && (
        <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
          ⚠️ {error}
        </div>
      )}

      <NoteInput input={input} setInput={setInput} addNote={addNote} />

      <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-3 sm:flex-row sm:justify-between">
        
        <Filter filter={filter} handleFilter={handleFilter} />

        {selectedNotes.length > 0 && (
          <button
            onClick={deleteSelectedNotes}
            className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            🗑️ Delete Selected ({selectedNotes.length})
          </button>
        )}
      </div>

      {isPending && (
        <div className="mb-4 flex justify-center gap-2 text-sm text-gray-400">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-200 border-t-purple-500"></div>
          Updating...
        </div>
      )}

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <NoteList
          notes={filteredNotes}
          toggleNote={toggleNote}
          editNote={editNote}
          deleteNote={deleteNote}
          selectedNotes={selectedNotes}
          toggleSelect={toggleSelect}
        />
      )}

    </section>
  );
}

export default NotesUI;