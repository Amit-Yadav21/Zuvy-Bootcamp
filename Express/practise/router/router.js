// import express from 'express'
// import { getUserItem, create, update, deleteuser } from '../controller/userController.js'
// const router = express.Router()

// router.get('/', getUserItem)
// router.post('/create', create)
// router.put('/update/:id', update)
// router.delete('/delete/:id', deleteuser)

// export  default router;



import express from 'express'
import { getAllUser, createUser, updateUser, deleteUser } from '../controller/userController.js'
import validationHanddler from '../meddleware/validationHandler.js';
const router = express.Router();

router.get('/',validationHanddler, getAllUser)
router.post('/create',validationHanddler, createUser)
router.put('/update/:id',validationHanddler, updateUser)
router.delete('/delete/:id',validationHanddler, deleteUser)

export default router;