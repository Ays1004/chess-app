import express from 'express'
import { getMove, postMove } from '../controllers/moveController.js';

const router = express.Router()

router.get('/:id',getMove)
router.post('/post/:id', postMove)

export default router;