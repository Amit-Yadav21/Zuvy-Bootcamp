import express from 'express'
import {findallUser, createUser, login, userProfile, logout} from '../controller/userController.js'
import { checkAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.get('/findallUser', findallUser)
router.get('/profile', checkAuthenticated, userProfile)
router.post('/register', createUser)
router.post('/login', login)
router.post('/logout', logout)

export default router;