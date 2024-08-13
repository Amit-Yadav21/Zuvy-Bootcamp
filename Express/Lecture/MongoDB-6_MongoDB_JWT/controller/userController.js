// import User from '../model/userShema.js';
import jwt from 'jsonwebtoken'

const users = [];

// Get all signup data function
const findUser = async (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ msg: 'Users not found' });
    }
    res.json(users);
};

// Register function
const createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!password) {
        return res.status(400).json({ error: 'password missing!' });
    }

    users.push({ username, password })
    res.status(200).json({ msg: "Register successfully" });
};

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username, password both are required." });
    }

    const user = users.find(item => item.username === username && item.password === password);
    const tokenData = {
        username: username
    }
     const token = jwt.sign(tokenData, 'amityadav222137')
    if (user) {
        res.status(200).json({ msg: 'Login Successful', token:token });
    } else {
        res.status(401).json({ msg: 'Login Failed' });
    }
};

export { createUser, login, findUser };