import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import moveRoutes from './routes/moveRoutes.js'
import gameRoutes from './routes/gameRoutes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)
app.use("/api/move", moveRoutes)
app.use('/api/game', gameRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log("server running on http://localhost:5000/")
})