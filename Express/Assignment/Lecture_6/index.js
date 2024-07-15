import express from 'express';
import 'dotenv/config';
import cartRoutes from './router/router.js';

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/cart', cartRoutes);

app.listen(port, function () {
    console.log(`Server is running on ${port}`);
});