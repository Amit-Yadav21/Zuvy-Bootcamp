import express from 'express'
import logging from '../middleware/logger.js';
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

// Router-level middleware - Authentication(only for single route)
// router.get('/logging', logging, (req,res)=>{
//     res.send({msg:"Router-level middleware - Authentication(only for single route)"})
// })

// Get all, sort and limit 
// localhost:3004/user?sort=desc&limit=1
router.get('/', (req, res, next) => {
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
        const err = new Error("Limit exceeds the number of users available")
        err.status = 400;
        return next(err)
    }

    // If no sort parameter provided and no limit. return all users
    if (users.length === 0) {
        const err = new Error("Users not found")
        err.status = 404;
        return next(err)
    }
    res.json(users);
});

// READ - GET user by id
// localhost:3004/user/1
router.get('/GetByID/:id', function (req, res) {
    const id = req.params.id;
    const user = users.filter(item => item.id == id)
    if (user.length === 0) {
        const err = new Error("users does not exist ?")
        err.status = 404;
        return next(err)
    }
    res.json(user)
})

router.post('/Login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(item => item.email === email && item.password === password);
    if (user) {
        res.json({ msg: 'Login Successful' });
    } else {
        const err = new Error("Login Failed")
        err.status = 401;
        return next(err)
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
        const err = new Error("User does not exist")
        err.status = 404;
        return next(err)
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
        const err = new Error("User does not exist")
        err.status = 404;
        return next(err)
    }
    res.json({msg:"User successfully deleted"});
});
 
export default router;