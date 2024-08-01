import express from 'express'
import { createWishlist, Getwishlist, updateWishlist } from '../controller/wishlistController.js'
const router = express.Router();

router.post('/create/wishlist', createWishlist)
router.get('/get/wishlist', Getwishlist)
router.put('/update/wishlist', updateWishlist)

export default router;