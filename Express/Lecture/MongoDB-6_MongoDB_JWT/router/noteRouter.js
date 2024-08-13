import express from 'express';
import { getNotes, createNote } from '../controller/noteController.js';

const router = express.Router();

router.get('/notes/getnotes', getNotes);     
router.post('/notes/create', createNote);    

export default router;