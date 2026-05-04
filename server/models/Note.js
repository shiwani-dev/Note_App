import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  text: String,
  importance: Boolean,
});

export default mongoose.model("Note", noteSchema);