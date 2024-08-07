import express from 'express';
import Cart from '../model/cartShema.js'

const router = express.Router();

// Route to get Product Data
router.get("/get-products", async (req, res) => {
    try {
        const Product = await Cart.find();
        res.status(200).json({ msg: "get sucessfull data", Product })
    }
    catch {
        res.status(401).json({ msg: "data not found ", error: error.message })
    }
})


// Route to add a new product
router.post('/add-product', async (req, res) => {
    const { product, price, quantity } = req.body;
    if (!product || !price || !quantity) {
        return res.status(400).json({ msg: 'Please provide username password email and number ' });
    }
    try {
        const newProduct = await Cart.insertMany({ product, price, quantity });
        res.status(201).json({ msg: 'User added successfully', user: newProduct });
    } catch (error) {
        res.status(500).json({ msg: 'Error adding user', error: error.message });
    }
});


// Route update existing product
router.put('/update-product', async (req, res) => {
    const { product, price, quantity } = req.body;
    try {
        const Product = await Cart.findOne({ product });
        if (!Product) {
            return res.status(404).json({ msg: 'User not found' });
        }
        if (price) Product.price = price;
        if (quantity) Product.quantity = quantity;
        res.status(200).json({ msg: 'User updated successfully', Product });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating user', error: error.message });
    }
});

// Route Delete existing product
router.delete('/delete-product', async (req, res) => {
    const { product } = req.body;
    try {
        const result = await Cart.deleteOne({ product });
        if (result.deletedCount === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting user', error: error.message });
    }
});


export default router;