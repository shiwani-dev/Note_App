import { useEffect, useState } from "react";
import {
  getNotes,
  createNote,
  updateNoteApi,
  deleteNoteApi,
} from "../services/noteApi";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedNotes, setSelectedNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await getNotes();
        setNotes(res.data);
      } catch (err) {
        console.log(err);
        setError("Cannot fetch notes from backend");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async () => {
    if (input.trim() === "") return;

    try {
      const newNote = {
        text: input,
        importance: false,
      };

      const res = await createNote(newNote);

      setNotes([...notes, res.data]);
      setInput("");
    } catch (err) {
      console.log(err);
      setError("Failed to add note");
    }
  };

  const deleteNote = async (id) => {
    try {
      await deleteNoteApi(id);

      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.log(err);
      setError("Failed to delete note");
    }
  };

  const toggleNote = async (id) => {
    try {
      const targetNote = notes.find((note) => note._id === id);
      if (!targetNote) return;

      const res = await updateNoteApi(id, {
        importance: !targetNote.importance,
      });

      setNotes(
        notes.map((note) => (note._id === id ? res.data : note))
      );
    } catch (err) {
      console.log(err);
      setError("Failed to update note");
    }
  };

  const editNote = async (id, newText) => {
    if (!newText || newText.trim() === "") return;

    try {
      const res = await updateNoteApi(id, {
        text: newText,
      });

      setNotes(
        notes.map((note) => (note._id === id ? res.data : note))
      );
    } catch (err) {
      console.log(err);
      setError("Failed to edit note");
    }
  };

  const filteredNotes = notes.filter((note) => {
    if (filter === "important") return note.importance === true;
    if (filter === "notImportant") return note.importance === false;
    return true;
  });

  const toggleSelect = (id) => {
    setSelectedNotes((prev) =>
    prev.includes(id) ? prev.filter((noteId)=> noteId !== id)
    : [...prev, id]
    );
  };

  const deleteSelectedNotes = async () => {
  try {
    await Promise.all(
      selectedNotes.map((id) => deleteNoteApi(id))
    );

    setNotes(
      notes.filter((note) => !selectedNotes.includes(note._id))
    );

    setSelectedNotes([]);
  } catch (err) {
    console.log(err);
    setError("Failed to delete selected notes");
  }
};

  return {
    notes,
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
    toggleSelect,
    selectedNotes,
    deleteSelectedNotes,
  };
}