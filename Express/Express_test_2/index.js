import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import userRouter from './router/userRouter.js'
import logging from './middleware/logger.js'
import bookRouter from './router/bookRouter.js'

const app = express();

const port = 3000;

mongoose.connect('mongodb+srv://amit21:SLb3cF41HdHgsdfL@cluster0.lvclbz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'Backend_Assignment'
})
    .then(() => {
        console.log('MongoDb Connected');
    })
    .catch((err) =>{
        console.log('Database connection error..!');
    })

app.use(session({
    secret: 'amit21@navgurkul',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    }),
    cookie: {
        // for minuts
        maxAge: 1000 * 60 * 5
    }
}))

app.use(logging)

app.use(express.json());
app.use('/', userRouter);
app.use('/', bookRouter);

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})