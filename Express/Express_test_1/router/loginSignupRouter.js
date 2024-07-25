import express from 'express'
import { createUser, getAllUser, loginUser } from '../controller/loginSignupController.js'
const router = express.Router();

router.get('/', getAllUser)
router.post('/register', createUser)
router.get('/login', loginUser)

export default router;