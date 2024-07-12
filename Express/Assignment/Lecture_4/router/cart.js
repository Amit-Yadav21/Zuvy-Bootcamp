import express from 'express'
const router = express.Router()

let cartItem = [
    { id: 1, product_name: 'T-shirt', price: '₹ 20', quantity: '1 pcs', total_price: '₹ 20' },
    { id: 2, product_name: 'Shoes', price: '₹ 30', quantity: '3 pcs', total_price: '̥₹ 90' },
    { id: 3, product_name: 'Pen', price: '₹ 2', quantity: '13 pcs', total_price: '₹ 26' },
    { id: 4, product_name: 'Pencil', price: '₹ 1', quantity: '8 pcs', total_price: '₹ 8' },
    { id: 5, product_name: 'Notebook', price: '₹ 15', quantity: '5 pcs', total_price: '₹ 75' },
    { id: 6, product_name: 'Bag', price: '₹ 25', quantity: '10 pcs', total_price: '₹ 250' },
    { id: 7, product_name: 'Hat', price: '₹ 50', quantity: '20 pcs', total_price: '₹ 1000' }
];

// Get all
router.get('/', (req, res) => {
    if (cartItem.length === 0) {
        return res.status(404).json({ msg: 'Cart Item not found' });
    }
    res.json(cartItem);
});

// CREATE - POST a new user
router.post('/create', (req, res) => {
    const { product_name, price, quantity, total_price } = req.body;
    const id = cartItem.length + 1;
    const newCartData = { id, product_name, price, quantity, total_price };
    cartItem.push(newCartData);
    res.status(200).json({msg: "Create Successful" , newCartItem:newCartData});
});

// UPDATE - PUT update user by id
router.put('/update/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = cartItem.find(item => item.id === id);

    if (item) {
        Object.assign(item, req.body);
        res.json({ msg: `Cart item with ID ${id} successfully updated.`, cartItem: item });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE - DELETE user by id
router.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    const initialLength = cartItem.length;
    cartItem = cartItem.filter(item => item.id != id);
    // console.log('After deleted item :',cartItem);
    if (cartItem.length === initialLength){
        return res.status(404).json({ msg: 'Cart Item does not exist...' });
    }
    res.json({msg:`Cart item with ID ${id} successfully deleted.`});
});
 
export default router;