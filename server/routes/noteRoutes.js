import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Note from "../models/Note.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

router.post("/", protect, async (req, res) => {
  const newNote = new Note({
    user: req.user.id,
    text: req.body.text,
    importance: req.body.importance || false,
  });

  const saved = await newNote.save();
  res.status(201).json(saved);
});

router.put("/:id", protect, async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });
  
  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const updated = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: "after", }
  );

  res.json(updated);
});

router.delete("/:id", protect, async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).json({ message: "Note not found" });

  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await note.deleteOne();

  res.json({ message: "Note deleted" });
});

export default router;