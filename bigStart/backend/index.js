import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // allow us to parse incoming requests:req.body
app.use(cookieParser()); // allow us parse incoming cookies
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use("/api/auth", authRoutes);

app.use(cookieParser());

app.listen(PORT, () => {
    connectDB();
    console.log("server is running on port: ", PORT)
});