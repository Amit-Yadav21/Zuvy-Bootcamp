import express from 'express';
import { getNotes, createNote, updateNote, deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/notes', getNotes);       // Get all notes for the logged-in user
router.post('/notes', createNote);    // Create a new note
router.put('/notes/:id', updateNote); // Update a note by ID
router.delete('/notes/:id', deleteNote); // Delete a note by ID

export default router;