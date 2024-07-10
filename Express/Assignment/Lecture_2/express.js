import express from 'express'
const app = express();
app.use(express.json());

let users = [
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

// READ - GET sorted users
// localhost:3004/users?sort=desc
app.get('/users/sort', (req, res) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        users.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'desc') {
        users.sort((a, b) => b.name.localeCompare(a.name));
    }
    res.json(users)
});

// READ - GET limited users
// localhost:3004/users/limit?limit=1
app.get('/users/limit', function (req, res) {
    const limit = req.query.limit

    if (limit > 0 && limit <= users.length) {
        return res.json(users.slice(0, limit));
    } else {
        return res.status(404).json({ message: "data not found" });
    }
});

// Get all, sort and limit 
// localhost:3004/user?sort=desc&limit=1
app.get('/user', (req, res) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        users.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'desc') {
        users.sort((a, b) => b.name.localeCompare(a.name));
    }

    const limit = Number(req.query.limit);
    if (limit > 0 && limit <= users.length) {
        return res.json(users.slice(0, limit));
    }
    else if (limit > users.length) {
        return res.status(404).json({ message: "Limit exceeds the number of users available" });
    }

    // If no sort parameter provided and no limit. return all users
    if (users.length === 0) {
        return res.status(404).json({ msg: 'Users not found' });
    }
    res.json(users);
});

// READ - GET user by id
// localhost:3004/user/1
app.get('/user/:id', function (req, res) {
    const id = req.params.id;
    const user = users.filter(item => item.id == id)
    if (user.length === 0) {
        return res.status(404).json({ msg: 'users does not exist ?' })
    }
    res.json(user)
})

// CREATE - POST a new user
app.post('/post', (req, res) => {
    const newUser = req.body;
    if (!newUser.name || !newUser.email || !newUser.age) {
        return res.status(400).json({ msg: 'Please include name, email, and age' });
    }
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(200).json(newUser);
});

// UPDATE - PUT update user by id
app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const index = users.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

// DELETE - DELETE user by id
app.delete('/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist...' });
    }
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser);
});

app.delete('/deleteByID/:id', (req, res) => {
    const id = Number(req.params.id)
    const initialLength = users.length;
    users = users.filter(item => item.id != id);
    // console.log('After deleted item :',users);
    if (users.length === initialLength){
        return res.status(404).json({ msg: 'User does not exist...' });
    }
    res.json({msg:"User successfully deleted"});
});

app.listen(3004, function () {
    console.log("Server is is runnig port 3004");
})