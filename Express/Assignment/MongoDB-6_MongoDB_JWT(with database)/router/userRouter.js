import express from 'express';
import { login, createUser, findUser, getUserStatus, updateUserProfile, changePassword} from '../controller/userController.js';
import tokenVerify from '../Middleware/tokenVerify.js'
const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', login);
router.get('/findUser', findUser);
router.get('/status',tokenVerify, getUserStatus)
router.put('/profileUpdate',tokenVerify, updateUserProfile);
router.put('/password',tokenVerify, changePassword);

export default router;
