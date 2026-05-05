import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express(); // ✅ FIRST create app

app.use(cors());
app.use(express.json());

connectDB();

// ✅ THEN use routes
app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});