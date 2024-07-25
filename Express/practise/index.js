// import express from 'express'
// import 'dotenv/config'
// import userRouter from './router/router.js'
// import errorHandler from './meddleware/errorhandler.js'
// import notFoundHendler from './meddleware/notFoundHendleer.js'
// import validationHanddler from './meddleware/validationHandler.js'

// const port = process.env.PORT
// const app = express()
// app.use(express.json())

// app.use('/user', userRouter)
// app.use(validationHanddler)
// app.use(errorHandler)
// app.use(notFoundHendler)

// app.listen(port, function(){
//     console.log(`server runnig on port ${port}`);
// })

import express from 'express'
import 'dotenv/config'
import userRouter from './router/router.js'
import errorHandler from './meddleware/errorhandler.js'
import notFoundHendler from './meddleware/notFoundHendleer.js'
import logger from './meddleware/logger.js'

const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(logger)

app.use('/user', userRouter)
app.use(notFoundHendler)
app.use(errorHandler)

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})