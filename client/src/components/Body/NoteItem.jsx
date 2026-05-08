import { useState } from "react";

function NoteItem({
  note,
  toggleNote,
  editNote,
  deleteNote,
  selectedNotes,
  toggleSelect,
}) {
  const isSelected = selectedNotes?.includes(note._id);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const startEdit = () => {
    setEditText(note.text);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editText.trim()) return;
    editNote(note._id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-3xl border bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        note.importance ? "border-green-200" : "border-slate-200"
      } ${isSelected ? "ring-4 ring-blue-100 border-blue-300" : ""}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-1 gap-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleSelect(note._id)}
            className="mt-1 h-4 w-4 accent-blue-500"
          />

          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave();
                  if (e.key === "Escape") handleCancel();
                }}
                className="w-full rounded-xl border border-blue-200 bg-blue-50/40 px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                autoFocus
              />
            ) : (
              <p className="text-sm font-medium text-justify 
               leading-6 text-slate-800">
                {note.text}
              </p>
            )}

            <div className="mt-2">
              {note.importance ? (
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Important
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                   Normal
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <button
            onClick={() => toggleNote(note._id)}
            disabled={isEditing}
            className={`rounded-xl px-3 py-2 text-xs font-semibold transition active:scale-95 ${
              note.importance
                ? "bg-green-50 text-green-700 hover:bg-green-100"
                : "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
            }`}
          >
            {note.importance ? "Marked ☑️" : "Mark ✔️"}
          </button>

          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-95"
              >
                Save
              </button>

              <button
                onClick={handleCancel}
                className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-200 active:scale-95"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={startEdit}
              className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100 active:scale-95"
            >
              Edit
            </button>
          )}

          <button
            onClick={() => deleteNote(note._id)}
            className="rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100 active:scale-95"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;