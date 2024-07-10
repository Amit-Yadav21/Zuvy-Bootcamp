import express from 'express'
import 'dotenv/config';
import usersRoute from './router/card.js'

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/card' , usersRoute)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})