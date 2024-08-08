import express from 'express';
import { login, createUser, findUser, getUserStatus, logoutUser, updateUserProfile, changePassword} from '../controller/userController.js';

const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', login);
router.get('/findUser', findUser);
router.get('/status', getUserStatus)
router.post('/logout', logoutUser)
router.put('/profileUpdate', updateUserProfile);
router.put('/password', changePassword);

export default router;
