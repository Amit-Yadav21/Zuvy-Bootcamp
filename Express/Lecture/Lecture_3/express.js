import express from 'express'
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'Ajay kumar', email: 'ajaykumar@navgurukul.com', age: 21 },
    { id: 2, name: 'Nagendra', email: 'nagendra@navgurukul.com', age: 20 },
    { id: 3, name: 'Rahul', email: 'rahul@navgurukul.com', age: 22 },
    { id: 4, name: 'Paras', email: 'paras@navgurukul.com', age: 19 },
    { id: 5, name: 'Amit', email: 'amit@navgurukul.com', age: 24 }
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
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    const index = users.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

app.listen(3004, function () {
    console.log("Server is is runnig port 3004");
})