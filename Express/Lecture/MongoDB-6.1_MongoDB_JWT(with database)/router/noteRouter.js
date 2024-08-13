import express from 'express';
import { getNotes, createNote, updateNote, deleteNote } from '../controller/noteController.js';

const router = express.Router();

router.get('/notes/getnotes', getNotes);     
router.post('/notes/create', createNote);    
router.put('/notes/update', updateNote);
router.delete('/notes/delete', deleteNote); 

export default router;