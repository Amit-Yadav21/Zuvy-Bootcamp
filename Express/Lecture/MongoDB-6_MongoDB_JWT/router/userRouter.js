import express from 'express';
import { login, createUser, findUser} from '../controller/userController.js';

const router = express.Router();

router.post('/createUser', createUser);
router.post('/login', login);
router.get('/findUser', findUser);

export default router;
