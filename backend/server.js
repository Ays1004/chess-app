import express from 'express';
import dotenv from "dotenv";
import { createServer } from 'http';
import { Server } from 'socket.io';

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

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    connectToMongoDB();
    console.log("server running on http://localhost:5000/")
})

export { io };