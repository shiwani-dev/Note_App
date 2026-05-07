import { useNotes } from "../hooks/useNotes";
import { useProfile } from "../hooks/useProfile";
import { useTransition } from "react";  
import Header from "../components/Heading/Header";
import SubHeader from "../components/Heading/SubHeader";
import NoteUi from "../components/Body/NoteUi";

function NotesPage() {
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

  const { user, logout } = useProfile();

  const [isPending, startTransition] = useTransition();

  const handleFilter = (type) => {
    startTransition(() => {
      setFilter(type);
    });
  };

  return (
    <div className="min-h-screen text-white bg-linear-to-br from-black via-purple-950 to-purple-700 py-8">
      <main className="mx-auto w-full max-w-4xl">

        <Header user={user} onLogout={logout} />

        <SubHeader
          filteredNotes={filteredNotes}
          selectedNotes={selectedNotes}
          loading={loading}
        />

        <NoteUi
          filteredNotes={filteredNotes}
          selectedNotes={selectedNotes}
          loading={loading}
          error={error}
          input={input}
          setInput={setInput}
          addNote={addNote}
          filter={filter}
          handleFilter={handleFilter}
          deleteSelectedNotes={deleteSelectedNotes}
          toggleNote={toggleNote}
          editNote={editNote}
          deleteNote={deleteNote}
          toggleSelect={toggleSelect}
          isPending={isPending}
        />

      </main>
    </div>
  );
}

export default NotesPage;