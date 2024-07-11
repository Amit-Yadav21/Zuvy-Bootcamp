import express from 'express'
import 'dotenv/config';
import cardData from './router/card.js'
import logging from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Router-level middleware - Authentication(only for all route)
app.use('/card', logging, cardData)

// notFound Handling Middleware
app.use(notFoundHandler)

// Error Handling Middleware
app.use(errorHandler); 

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})