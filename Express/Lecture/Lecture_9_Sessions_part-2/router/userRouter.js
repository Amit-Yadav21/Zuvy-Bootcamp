import express from 'express'
import { createUser, getUserData, loginUser, logout, findAllUsersWithCart } from '../controller/userController.js'
const router = express.Router();

router.get('/getUserData', getUserData)
router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/logout', logout)

router.get('/findAllUsersWithCart', findAllUsersWithCart)

export default router;