import express from 'express'
import 'dotenv/config';
import CartItem from './router/cart.js'

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/cart' , CartItem)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})