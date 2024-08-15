import express from 'express';
import { login, createUser, findUser, getUserStatus, updateUserProfile, changePassword, logoutUser} from '../controller/userController.js';
const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', login);
router.get('/findUser', findUser);
router.get('/status', getUserStatus)
router.put('/profileUpdate', updateUserProfile);
router.put('/password', changePassword);
router.post('/logout', logoutUser)

export default router;
