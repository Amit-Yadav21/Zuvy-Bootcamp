import express from 'express';
import { getAllCartItems, createCartItem, updateCartItem, deleteCartItem } from '../controllers/cartController.js';
import {cartValidationGetall, cartValidationCreate, cartValidationUpdate, cartValidationDelete} from '../validations/cartValidation.js'
import { checkSchema } from 'express-validator';

const router = express.Router();

router.get('/', checkSchema(cartValidationGetall), getAllCartItems);
router.post('/create', cartValidationCreate, createCartItem);
router.put('/update/:id',cartValidationUpdate, updateCartItem);
router.delete('/delete/:id', cartValidationDelete, deleteCartItem);

export default router;