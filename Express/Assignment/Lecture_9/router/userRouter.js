import express from 'express'
import { createUser, UserDashboard, loginUser, logout, sessionInfo } from '../controller/userController.js'
const router = express.Router();

router.post('/register', createUser)
router.get('/login', loginUser)
router.get('/UserDashboard', UserDashboard)

router.post('/logout', logout)
router.get('/sessionInfo', sessionInfo)

export default router;