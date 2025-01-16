import express from 'express'
import { createGame } from '../controllers/gameController.js'

const router = express.Router()

router.post("/create", createGame);

export default router;