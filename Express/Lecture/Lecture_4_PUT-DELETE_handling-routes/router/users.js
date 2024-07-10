import express from 'express'
const app = express();
const router = express.Router()

app.use(express.json());

let users = [
    { id: 1, name: 'Arti', email: 'arti@gamil.com', age: 21, password: 'arti@123' },
    { id: 2, name: 'Samar', email: 'samar@gmail.com', age: 20, password: 'samar@123' },
    { id: 3, name: 'Amar', email: 'amar@gamil.com', age: 22, password: 'amar@1234' },
    { id: 4, name: 'Sushil', email: 'sushil@gmail.com', age: 19, password: 'sushil@12345' },
    { id: 5, name: 'Ashok', email: 'ashok@gmail.com', age: 24, password: 'ashok@12' },
    { id: 6, name: 'Avdhesh', email: 'avdhesh@gmail.com', age: 28, password: 'avdhesh@1' },
    { id: 7, name: 'Ajay', email: 'ajay@ajay.com', age: 22, password: 'password' }
];

// Get all, sort and limit 
// localhost:3004/user?sort=desc&limit=1
router.get('/', (req, res) => {
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
router.get('/GetByID/:id', function (req, res) {
    const id = req.params.id;
    const user = users.filter(item => item.id == id)
    if (user.length === 0) {
        return res.status(404).json({ msg: 'users does not exist ?' })
    }
    res.json(user)
})

router.post('/Login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(item => item.email === email && item.password === password);
    if (user) {
        res.json({ msg: 'Login Successful' });
    } else {
        res.status(401).json({ msg: 'Login Failed' });
    }
});


// CREATE - POST a new user
router.post('/Register', (req, res) => {
    const { name, email, age, password } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, email, age, password };
    users.push(newUser);
    res.status(200).json({msg: "Register Successful" , UserData:newUser});
});

// UPDATE - PUT update user by id
router.put('/updateByID/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

// DELETE - DELETE user by id
router.delete('/deleteByID/:id', (req, res) => {
    const id = Number(req.params.id)
    const initialLength = users.length;
    users = users.filter(item => item.id != id);
    // console.log('After deleted item :',users);
    if (users.length === initialLength){
        return res.status(404).json({ msg: 'User does not exist...' });
    }
    res.json({msg:"User successfully deleted"});
});
 
export default router;