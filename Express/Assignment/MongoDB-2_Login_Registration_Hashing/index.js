import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';

const app = express();
const PORT = 3000;

const Mongo_Url = 'mongodb://localhost:27017/UserData';
mongoose.connect(Mongo_Url)
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((error) => {
        console.log('Mongodb did not connect', error);
    });

app.use(express.json());
app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});