import NoteInput from "./components/NoteInput";
import Filter from "./components/Filter";
import NoteList from "./components/NoteList";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { useNotes } from "./hooks/useNotes";

function App() {
  const {
    input,
    setInput,
    loading,
    // error,
    filteredNotes,
    addNote,
    deleteNote,
    toggleNote,
    editNote,
    setFilter,
  } = useNotes();

  return (
    <div>
      {/* heading */}
      {/* error */}
      <NoteInput input={input} setInput={setInput} addNote={addNote} />
      <Filter handleFilter={setFilter} />

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <NoteList
          filteredNotes={filteredNotes}
          toggleNote={toggleNote}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
}

export default App;