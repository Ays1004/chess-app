import express from 'express';
import authRoutes from "./routes/authRoutes.js"

const app = express();

const PORT = 5000;

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server running on http://localhost:5000/")
})