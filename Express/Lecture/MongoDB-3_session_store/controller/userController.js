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

        req.session.user = user;
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getUserStatus = async (req, res) => {
    const user = req.session.user;
    user ? res.status(200).json(user) : res.status(401).json({ msg: "User not login" });
}

const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }
        // This clears the session cookie
        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Logout successful' });
    });
};

// Update user profile function
const updateUserProfile = async (req, res) => {
    const { username, password } = req.body;

    // Check if session user is set
    if (!req.session.user) {
        return res.status(401).json({ error: 'User not logged in' });
    }

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const user = await User.findById(req.session.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await hashPassword(password);

        // Update the user's username and password
        user.username = username;
        user.password = hashedPassword;

        // Save the updated user information
        const updatedUser = await user.save();

        // Update the session with the new user data
        req.session.user = updatedUser;

        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Change password function
const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!req.session.user) {
        return res.status(404).json({ error: 'User not logged In.' });
    }

    try {
        const isMatch = await comparePasswordHash(currentPassword, user.password);
        if (!isMatch) {
            return res.status(403).json({ error: 'Current password is incorrect' });
        }
        
        const user = await User.findById(req.session.user._id);
        user.password = await hashPassword(newPassword);
        await user.save();
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { createUser, login, findUser, getUserStatus, logoutUser, updateUserProfile, changePassword };