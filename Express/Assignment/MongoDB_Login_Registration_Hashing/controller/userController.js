import User from '../model/userShema.js';
import { hashPassword, comparePasswordHash } from '../passwordHash/passwordHash.js';

// Get all signup data function
const findUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Register function
const createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ error: 'Username or password missing!' });
        }

        // Check if user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: 'User already exists. Please Login!' });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new user instance
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        // Save the new user to the database
        const result = await newUser.save();
        res.status(201).json({ message: "Signup successful", result });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username, password both are required." });
    }

    try {
        // Check if user exists
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(403).json({ error: "User not exist." });
        }

        // Compare the provided password with the stored hash
        const isMatch = await comparePasswordHash(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ error: "Invalid password." });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { createUser, login, findUser };
