import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";



// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
