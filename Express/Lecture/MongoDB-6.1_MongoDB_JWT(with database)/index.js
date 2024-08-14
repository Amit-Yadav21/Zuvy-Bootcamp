import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import noteRouter from './router/noteRouter.js'
import errorhandler from './Middleware/errorHandler.js';
import {tokenVerify} from './Middleware/tokenVerify.js';
import cookieParser from 'cookie-parser';

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

// Use cookie-parser middleware
app.use(cookieParser());

app.use(express.json());
app.use('/', userRouter);
app.use('/', tokenVerify, noteRouter);

app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
