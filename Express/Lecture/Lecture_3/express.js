import express from 'express'
import 'dotenv/config';
const PORT = process.env.PORT

const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'Arti', email: 'arti@gamil.com', age: 21 },
    { id: 2, name: 'Samar', email: 'samar@gmail.com', age: 20 },
    { id: 3, name: 'Amar', email: 'amar@gamil.com', age: 22 },
    { id: 4, name: 'Sushil', email: 'sushil@gmail.com.com', age: 19 },
    { id: 5, name: 'Ashok', email: 'ashok@gmail.com', age: 24 },
    { id: 6, name: 'Avdhesh', email: 'avdhesh@gmail.com', age: 28 },
    { id: 7, name: 'Ajay', email: 'ajay@ajay.com', age: 22 }
];

// READ - GET all users
// localhost:3004/users
app.get('/users', (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ msg: 'data not found' });
    }
    res.json(users);
});

// CREATE - POST a new user
app.post('/postUser', (req, res) => {
    const newUser = req.body;
    if (!newUser.name || !newUser.email || !newUser.age) {
        return res.status(400).json({ msg: 'Please include name, email, and age' });
    }
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(200).json(newUser);
});

// UPDATE - PUT update user by id
app.put('/updateUser', (req, res) => {
    const id = Number(req.body.id)
    const userIndex = users.findIndex(item => item.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ msg: 'User not found' });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});

app.listen(PORT, function () {
    console.log(`Server is is runnig on ${PORT}`);
})