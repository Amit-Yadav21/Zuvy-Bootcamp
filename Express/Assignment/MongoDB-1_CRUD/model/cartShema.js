import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Cart = mongoose.model('cart', userSchema);

export default Cart;