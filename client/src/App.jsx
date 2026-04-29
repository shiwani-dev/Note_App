import { useNotes } from "./hooks/useNotes";
import NoteInput from "./components/NoteInput";
import Filter from "./components/Filter";
import NoteList from "./components/NoteList";
import LoadingSkeleton from "./components/LoadingSkeleton";

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
  } = useNotes();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-3 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Smart Notes Manager
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Organize Your Notes
          </h1>

          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            Create, edit, delete, and prioritize your notes in one clean workspace.
          </p>
        </div>

        {error && (
          <p className="text-center text-red-500 font-medium mb-4">
            {error}
          </p>
        )}

        <NoteInput
          input={input}
          setInput={setInput}
          addNote={addNote}
        />

        <Filter filter={filter} setFilter={setFilter} />

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <NoteList
            notes={filteredNotes}
            toggleNote={toggleNote}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;