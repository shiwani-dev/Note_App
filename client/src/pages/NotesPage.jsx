import { useNotes } from "../hooks/useNotes";
import NoteInput from "../components/NoteInput";
import Filter from "../components/Filter";
import NoteList from "../components/NoteList";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useTransition } from "react";

function App() {
  const {
    filteredNotes,
    input,
    setInput,
    filter,
    setFilter,
    loading,
    error,
    addNote,
    deleteNote,
    toggleNote,
    editNote,
    selectedNotes,
    toggleSelect,
    deleteSelectedNotes,
  } = useNotes();

  const [isPending, startTransition] = useTransition();

  const handleFilter = (type) => {
    startTransition(() => {
      setFilter(type);
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-linear-to-br from-blue-200 via-violet-50 to-pink-50 px-4 py-8">
      <main className="mx-auto w-full max-w-4xl">
        <section className="mb-5 text-center animate-fade-in bg-green-200 rounded-2xl border border-purple-100">
          <div className="inline-flex items-center mt-4 gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
            <span>✨</span>
            <span>Smart Notes Manager</span>
          </div>

          

          <p className="mx-auto mt-2 p-4 max-w-xl text-sm leading-6  sm:text-base">
            Create, edit, delete, and prioritize your notes in a calm, focused
            workspace.
          </p>
        </section>

        <section className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-purple-100 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-slate-500">📝 Visible Notes</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {filteredNotes.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-slate-500">⭐ Selected</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {selectedNotes.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-pink-100 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-slate-500">🌿 Status</p>
            <h2 className="mt-1 text-base font-semibold text-slate-700">
              {loading ? "Loading..." : "Ready"}
            </h2>
          </div>
        </section>

        <section className="rounded-3xl border border-purple-100 bg-white/90 p-5 shadow-xl shadow-purple-100/70 backdrop-blur">
          {error && (
            <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
              ⚠️ {error}
            </div>
          )}

          <NoteInput input={input} setInput={setInput} addNote={addNote} />

          <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-3 sm:flex-row sm:items-center sm:justify-between">
            <Filter filter={filter} handleFilter={handleFilter} />

            {selectedNotes.length > 0 && (
              <button
                onClick={deleteSelectedNotes}
                className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 active:scale-95"
              >
                🗑️ Delete Selected ({selectedNotes.length})
              </button>
            )}
          </div>

          {isPending && (
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-purple-500"></div>
              <span>Updating notes...</span>
            </div>
          )}

          {loading ? (
            <LoadingSkeleton />
          ) : (
            <NoteList
              notes={filteredNotes}
              toggleNote={toggleNote}
              loading={loading}
              editNote={editNote}
              deleteNote={deleteNote}
              selectedNotes={selectedNotes}
              toggleSelect={toggleSelect}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;