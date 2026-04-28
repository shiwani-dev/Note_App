import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let notes = [];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});