import express from 'express'
import { createUser, getAllData, loginUser } from '../controller/userController.js'
const router = express.Router();

router.post('/register', createUser)
router.get('/login', loginUser)
router.get('/getAllData', getAllData)

export default router;