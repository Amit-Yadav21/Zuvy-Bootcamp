import express from 'express'
import cookiesRoute from './router/cookiesRouter.js'
import userRouter from './router/userRouter.js'
import cartRouter from './router/cartRouter.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';

const port = 3010;
const app = express();

app.use(express.json());

// cookies paeser middleware for get cookies in object formate  
app.use(cookieParser('AmitYadav@12345'))

// middleware to use session
app.use(session({
    secret:"amit@21@navgurukul",
    saveUninitialized:false,
    resave:false,
    cookie: {
        maxAge: 60000 * 40
    }
}))

app.use('/cookies' , cookiesRoute)
app.use('/user' , userRouter)
app.use('/cart' , cartRouter)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})