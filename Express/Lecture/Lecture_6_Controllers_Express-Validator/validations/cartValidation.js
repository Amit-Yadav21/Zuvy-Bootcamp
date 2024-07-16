import { body, param } from 'express-validator';

// const cartValidationGetall = {
//     sort: {
//         in: ['query'],
//         optional: true,
//         isIn: {
//             options: [['asc', 'desc']],
//             errorMessage: 'Sort must be either asc or desc',
//         },
//     },
//     limit: {
//         in: ['query'],
//         optional: true,
//         isInt: {
//             options: { min: 1 },
//             errorMessage: 'Limit must be a positive integer',
//         },
//     },
// };

const cartValidationGetall = () => {
    return [
        query('sort').optional().isIn(['asc', 'desc']).withMessage('Sort must be either "asc" or "desc"'),
        query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer greater than 0')
    ];
}

const cartValidationCreate = [
    body('product_name').notEmpty().withMessage('Product name is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('quantity').notEmpty().withMessage('Quantity is required'),
    body('total_price').notEmpty().withMessage('Total price is required')
];

const cartValidationId = [
    param('id').isNumeric().withMessage('ID must be a number')
];


export { cartValidationGetall, cartValidationCreate, cartValidationId };