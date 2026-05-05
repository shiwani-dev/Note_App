import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: String,
  importance: Boolean,
}, { timestamps: true });

export default mongoose.model("Note", noteSchema);