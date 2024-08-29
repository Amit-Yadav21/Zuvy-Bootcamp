import express from 'express';
import { getAllBooks, addBook, addmultipleBooks, updateBook, deleteBook } from '../controller/bookController.js';
import { checkAuthenticated, checkRole } from '../middleware/auth.js';

const router = express.Router();

// Book Routes
router.get('/books',checkAuthenticated, getAllBooks);
router.post('/books',checkAuthenticated, checkRole('admin'), addBook);
router.post('/mulipleBooks', checkAuthenticated, checkRole('admin'), addmultipleBooks);
router.put('/books/:id',checkAuthenticated, checkRole('admin'), updateBook);
router.delete('/books/:id',checkAuthenticated, checkRole('admin'), deleteBook);

export default router;
