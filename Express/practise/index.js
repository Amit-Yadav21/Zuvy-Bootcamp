import express from 'express'
import 'dotenv/config'
import userRouter from './router/router.js'
import errorHandler from './meddleware/errorhandler.js'
import notFoundHendler from './meddleware/notSoundHendleer.js'
import validationHanddler from './meddleware/validationHandler.js'

const port = process.env.PORT
const app = express()
app.use(express.json())

app.use('/user', userRouter)
app.use(validationHanddler)
app.use(errorHandler)
app.use(notFoundHendler)

app.listen(port, function(){
    console.log(`server runnig on port ${port}`);
})