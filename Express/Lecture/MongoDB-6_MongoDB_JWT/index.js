import express from 'express';
import userRouter from './router/userRouter.js';
import noteRouter from './router/noteRouter.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', userRouter);
app.use('/', noteRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
