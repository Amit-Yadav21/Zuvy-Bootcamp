import express from 'express';
import { getAllCartItems, createCartItem, updateCartItem, deleteCartItem } from '../controllers/cartController.js';

// import { query } from 'express-validator'; // for single route
import {cartValidationGetall, cartValidationCreate, cartValidationId} from '../validations/cartValidation.js'
import { checkSchema } from 'express-validator';

const router = express.Router();

// router.get('/', [
//     query('limit').isInt({min:1}).optional(),
//     query('sort').isIn(['asc',  'desc']).optional()
// ], getAllCartItems);

router.get('/', checkSchema(cartValidationGetall), getAllCartItems);
router.post('/create', cartValidationCreate, createCartItem);
router.put('/update/:id', cartValidationId, updateCartItem);
router.delete('/delete/:id', cartValidationId, deleteCartItem);

export default router;