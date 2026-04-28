import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let notes = [
    {id:1, text:"My first proper project like a Pro.",importance:false},
    {id:2, text:"React with proper structure.",importance:false},
];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

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

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});