import express from 'express'
import 'dotenv/config';
import notesRoute from './router/notes.js'
import usersRoute from './router/users.js'

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/note' , notesRoute)
app.use('/user' , usersRoute)

app.listen(port, function () {
    console.log(`Server is is runnig on ${port}`);
})