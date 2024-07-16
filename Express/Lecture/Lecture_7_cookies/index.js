import express from 'express'
import cookiesRoute from './router/cookiesRouter.js'
import usersRoute from './router/users.js'
import cookieParser from 'cookie-parser';

const port = 3010;
const app = express();

app.use(express.json());

// cookies paeser middleware for get cookies in object formate  
app.use(cookieParser())

app.use('/user' , usersRoute)
app.use('/cookies' , cookiesRoute)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})