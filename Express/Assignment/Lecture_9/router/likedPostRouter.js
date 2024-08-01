import express from 'express'
import { getLikedPost, createLikedPost } from '../controller/likedPostController.js'
const router = express.Router();

router.post('/create/liked-posts', createLikedPost)
router.get('/get/liked-posts', getLikedPost)

export default router;