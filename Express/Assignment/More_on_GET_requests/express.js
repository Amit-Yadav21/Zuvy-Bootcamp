import express from 'express'
const app = express();

const users = [
    { id: 1, name: 'Ajay kumar', email: 'ajaykumar@navgurukul.com', age: 21 },
    { id: 2, name: 'Nagendra', email: 'nagendra@navgurukul.com', age: 20 },
    { id: 3, name: 'Rahul', email: 'rahul@navgurukul.com', age: 22 },
    { id: 4, name: 'Paras', email: 'paras@navgurukul.com', age: 19 },
    { id: 5, name: 'Amit', email: 'amit@navgurukul.com', age: 24 }
];

// localhost:3004/users
app.get('/users', (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ msg: 'data not found' });
    }
    res.json(users);
});

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


// localhost:3004/users/limit?limit=1
app.get('/users/limit', function (req, res) {
    const limit = req.query.limit

    if (limit > 0 && limit <= users.length) {
        return res.json(users.slice(0, limit));
    } else {
        return res.status(404).json({ message: "data not found" });
    }
});

// localhost:3004/user/1
app.get('/user/:id', function (req, res) {
    const id = req.params.id;
    const user = users.filter(item => item.id == id)
    if (user.length === 0) {
        return res.status(404).json({ msg: 'users does not exist ?' })
    }
    res.json(user)
})

app.listen(3004, function () {
    console.log("Server is is runnig port 3004");
})