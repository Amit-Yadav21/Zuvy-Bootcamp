import express from 'express'
import 'dotenv/config';
import usersRoute from './router/users.js'
import logging from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';

const app = express();
const port = process.env.PORT;

// Logger Meddleware, Application-level middleware - Logging (whole application)
app.use(logging)

app.use(express.json());

app.use('/user' , usersRoute)

app.use(notFoundHandler)
app.use(errorHandler); // Error Handling Middleware

// app.use('/user', logging, usersRoute) // Router-level middleware - Authentication(only for all route)
// app.use('/user', usersRoute) // Router-level middleware - Authentication(only for single route)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})