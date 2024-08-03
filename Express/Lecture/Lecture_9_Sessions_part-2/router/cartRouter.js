import express from 'express'
import { createCart, findCart } from '../controller/cardController.js'
const router = express.Router();

router.get('/findCart', findCart)
router.post('/create', createCart)

export default router;