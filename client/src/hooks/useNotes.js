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
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getNotes();
        if (res?.data) setNotes(res.data);
      } catch {
        setError("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addNote = async () => {
    try {
      if (!input.trim()) return;
      const res = await createNote({ text: input });
      if (!res?.data) return;
      setNotes((prev) => [res.data, ...prev]);
      setInput("");
    } catch {
      setError("Add failed");
    }
  };

  const deleteNote = async (id) => {
    try {
      await deleteNoteApi(id);
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch {
      setError("Delete failed");
    }
  };

  const toggleNote = async (id) => {
    try {
      const note = notes.find((n) => n._id === id);
      if (!note) return;
      const res = await updateNoteApi(id, {
        importance: !note.importance,
      });
      if (!res?.data) return;
      setNotes((prev) =>
        prev.map((n) => (n._id === id ? res.data : n))
      );
    } catch {
      setError("Update failed");
    }
  };

  const editNote = async (id, text) => {
    try {
      const res = await updateNoteApi(id, { text });
      if (!res?.data) return;
      setNotes((prev) =>
        prev.map((n) => (n._id === id ? res.data : n))
      );
    } catch {
      setError("Edit failed");
    }
  };

  const toggleSelect = (id) => {
    setSelectedNotes((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const deleteSelectedNotes = async () => {
    try {
      await Promise.all(selectedNotes.map((id) => deleteNoteApi(id)));
      setNotes((prev) =>
        prev.filter((n) => !selectedNotes.includes(n._id))
      );
      setSelectedNotes([]);
    } catch {
      setError("Bulk delete failed");
    }
  };

  const filteredNotes = (notes || []).filter((note) => {
    if (filter === "important") return note.importance;
    if (filter === "normal") return !note.importance;
    return true;
  });

  return {
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
  };
}