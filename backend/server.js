import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import moveRoutes from './routes/moveRoutes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)
app.use("/api/move", moveRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log("server running on http://localhost:5000/")
})