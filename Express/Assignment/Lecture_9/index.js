import express from 'express'
import userRouter from './router/userRouter.js'
import likedPostRouter from './router/likedPostRouter.js'
import wishlistRouter from './router/wishlistRouter.js'
import session from 'express-session';

const port = 3011;
const app = express();

app.use(express.json());

// middleware to use session
app.use(session({
    secret:"amit@21@navgurukul",
    saveUninitialized:false,
    resave:false,
    cookie: {
        // maxAge: 1000 * 60 * 60 * 1, // 1 hours for expiration time
        maxAge: 1000 * 60 * 5  // 1 minutes for expiration time
    }
}))

app.use('/' , userRouter)
app.use('/' , likedPostRouter)
app.use('/' , wishlistRouter)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})