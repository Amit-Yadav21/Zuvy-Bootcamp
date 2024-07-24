import express from 'express'
import { getUserItem, create, update, deleteuser } from '../controller/userController.js'
const router = express.Router()

router.get('/', getUserItem)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteuser)

export  default router;