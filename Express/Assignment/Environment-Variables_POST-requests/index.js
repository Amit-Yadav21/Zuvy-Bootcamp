import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(express.json());

const users = [
    { id: 1, name: 'Arti', email: 'arti@gamil.com', age: 21, password: 'arti@123' },
    { id: 2, name: 'Samar', email: 'samar@gmail.com', age: 20, password: 'samar@123' },
    { id: 3, name: 'Amar', email: 'amar@gamil.com', age: 22, password: 'amar@1234' },
    { id: 4, name: 'Sushil', email: 'sushil@gmail.com', age: 19, password: 'sushil@12345' },
    { id: 5, name: 'Ashok', email: 'ashok@gmail.com', age: 24, password: 'ashok@12' },
    { id: 6, name: 'Avdhesh', email: 'avdhesh@gmail.com', age: 28, password: 'avdhesh@1' },
    { id: 7, name: 'Ajay', email: 'ajay@ajay.com', age: 22, password: 'password' }
];

// localhost:3006/getAllUsers
app.get('/getAllUsers', (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ msg: 'data not found' });
    }
    res.json({msg: "Get all Users Data", UserData: users});
});

// localhost:3006/register
app.post('/register', (req, res) => {
    const { name, email, age, password } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, email, age, password };
    users.push(newUser);
    res.status(200).json({msg: "Register Successful" , UserData:newUser});
});

// localhost:3006/updateUser
app.put('/updateUser', (req, res) => {
    const id = Number(req.body.id);
    const userIndex = users.findIndex(item => item.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ msg: 'User not found' });
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json({msg: "Update Successful", UpdatedData : users[userIndex]});
});

// localhost:3006/login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(item => item.email === email && item.password === password);
    if (user) {
        res.json({ msg: 'Login Successful' });
    } else {
        res.status(401).json({ msg: 'Login Failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});