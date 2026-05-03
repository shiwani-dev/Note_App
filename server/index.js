import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

let notes = [
    {id:1, text:"Review the full React data flow from input typing to backend saving, including how state changes, props pass down, and axios sends data to the server.",importance:true},
    {id:2, text:"Refactor the Notes App into a clean structure with components, custom hooks, and services so the project looks more professional and easier to maintain.",importance:false},
    {id:3, text:"Test every backend CRUD route carefully using browser and PowerShell before connecting it with the frontend UI.",importance:false},
    {id:4, text:"Replace the old prompt-based edit system with inline editing so users can update notes directly inside the note card.",importance:false},
];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/auth", authRoutes);

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {

    const newNote = {
        id : Date.now(),
        text : req.body.text,
        importance : req.body.importance || false,
    }
    notes.push(newNote);
    res.status(201).json(newNote);
});

app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.filter((note) => note.id !== id);

  res.json({ message: "Note deleted" });
});

app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.map((note) =>
    note.id === id ? { ...note, ...req.body } : note
  );

  const updatedNote = notes.find((note) => note.id === id);

  res.json(updatedNote);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});