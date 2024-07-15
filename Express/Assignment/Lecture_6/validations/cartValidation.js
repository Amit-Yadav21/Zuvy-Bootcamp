import { body, param } from 'express-validator';
import cartItem from '../cartItem/cartItem.js';

const cartValidationGetall = {
    sort: {
        in: ['query'],
        optional: true,
        isIn: {
            options: [['asc', 'desc']],
            errorMessage: 'Sort must be either asc or desc',
        },
    },
    limit: {
        in: ['query'],
        optional: true,
        isInt: {
            options: { min: 1, max: cartItem.length },
            errorMessage: `Limit must be a positive integer and cannot exceed ${cartItem.length}`,
        },
    },
};

const cartValidationCreate = [
    body('product_name').notEmpty().withMessage('Product name is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('quantity').notEmpty().withMessage('Quantity is required'),
    body('total_price').notEmpty().withMessage('Total price is required')
];

const cartValidationUpdate = [
    param('id').isNumeric().withMessage('ID must be a number'),
    body('product_name').optional().notEmpty().withMessage('Product name is required'),
    body('price').optional().notEmpty().withMessage('Price is required'),
    body('quantity').optional().notEmpty().withMessage('Quantity is required'),
    body('total_price').optional().notEmpty().withMessage('Total price is required')
];

const cartValidationDelete = [
    param('id').isNumeric().withMessage('ID must be a number')
];

export { cartValidationGetall, cartValidationCreate, cartValidationUpdate, cartValidationDelete };
