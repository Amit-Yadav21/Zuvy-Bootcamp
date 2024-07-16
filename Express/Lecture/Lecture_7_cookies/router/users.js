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

router.get('/', (req, res, next) => {
    if (users.length === 0) {
        const err = new Error("Users not found")
        err.status = 404;
        return next(err)
    }
    res.json(users);
});
 
export default router;