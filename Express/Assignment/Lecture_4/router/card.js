import express from 'express'
const router = express.Router()

let users = [
    { id: 1, name: 'Arti', email: 'arti@gamil.com', age: 21, password: 'arti@123' },
    { id: 2, name: 'Samar', email: 'samar@gmail.com', age: 20, password: 'samar@123' },
    { id: 3, name: 'Amar', email: 'amar@gamil.com', age: 22, password: 'amar@1234' },
    { id: 4, name: 'Sushil', email: 'sushil@gmail.com', age: 19, password: 'sushil@12345' },
    { id: 5, name: 'Ashok', email: 'ashok@gmail.com', age: 24, password: 'ashok@12' },
    { id: 6, name: 'Avdhesh', email: 'avdhesh@gmail.com', age: 28, password: 'avdhesh@1' },
    { id: 7, name: 'Ajay', email: 'ajay@ajay.com', age: 22, password: 'password' }
];

// Get all
router.get('/', (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ msg: 'Users not found' });
    }
    res.json(users);
});

// CREATE - POST a new user
router.post('/create', (req, res) => {
    const { name, email, age, password } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, email, age, password };
    users.push(newUser);
    res.status(200).json({msg: "Register Successful" , UserData:newUser});
});

// UPDATE - PUT update user by id
router.put('/update/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

// DELETE - DELETE user by id
router.delete('/delete/:id', (req, res) => {
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