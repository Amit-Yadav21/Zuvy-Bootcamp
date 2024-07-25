import express from 'express'
import UserRouter from './router/loginSignupRouter.js'
import todoRouter from './router/todoListRouter.js'
import errorHandler from './midleware/errorhandler.js'
import notFoundHandler from './midleware/notFoundHandler.js'
import 'dotenv/config'
const port = process.env.port
const app = express();

app.use(express.json())

app.use('/user', UserRouter)
app.use('/todo', todoRouter)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(port, function(){
    console.log(`Server runnig on port ${port}`);
})