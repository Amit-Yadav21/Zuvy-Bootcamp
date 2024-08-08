import express from 'express'
import { createCart, findCartCreatedByLoginUser } from '../controller/cardController.js'
const router = express.Router();

router.get('/findCartCreatedByLoginUser', findCartCreatedByLoginUser)
router.post('/create', createCart)

export default router;