import express from 'express'
import { createTodoList, getAllTodoList, updateTodo, deleteTodo } from '../controller/todoListController.js'
const router = express.Router();

router.post('/create', createTodoList)
router.get('/', getAllTodoList)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

export default router;