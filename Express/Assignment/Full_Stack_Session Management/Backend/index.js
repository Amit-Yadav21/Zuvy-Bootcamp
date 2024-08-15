import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import noteRouter from './router/noteRouter.js'
import errorhandler from './Middleware/errorHandler.js';
import session from 'express-session';
import MongoStore from 'connect-mongo'; //store session in database 
import cors from 'cors'

const app = express();
const PORT = 3000;

const Mongo_Url = 'mongodb://localhost:27017/FullStackSessionManagement';
mongoose.connect(Mongo_Url)
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((error) => {
        console.log('Mongodb did not connect', error);
    });

app.use(cors())

// middleware to use session
app.use(session({
    secret: "amit@21@navgurukul",
    saveUninitialized: false,    // store session without user data 
    resave: false,   // Don't save new session and expiry time every req .
    store: MongoStore.create({
        //store session in database 
        client: mongoose.connection.getClient()
    }),
    cookie: {
        // maxAge: 1000 * 60 * 60 * 1, // 1 hours for expiration time
        maxAge: 1000 * 60 * 5  // 1 minutes for expiration time
    }
}))

app.use(express.json());
app.use('/', userRouter);
app.use('/', noteRouter);

app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
