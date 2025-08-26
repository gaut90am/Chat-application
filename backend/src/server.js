
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT ; // Fallback to 5001 if .env doesn't have PORT

// 
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true // allow frontend to send cookies
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/auth",userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

